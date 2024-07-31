import os
import json

import requests


def appid2name(appid):
    config_path = os.path.join(os.getcwd(), 'utils', 'appid2name', 'config.json')
    with open(config_path) as f:
        config = json.load(f)
        url = config.get('url', '')
        method = config.get('method', '')
        token = config.get('token', '')
        payload = {
            'appid': appid
        }
        try:
            if method == 'GET':
                response = requests.get(url, headers={'token': token}, params=payload)
            elif method == 'POST':
                response = requests.post(url, headers={'token': token}, data=payload)
            else:
                raise Exception('Invalid method')
            if response.status_code == 200:
                return response.json()
            else:
                raise Exception(f'Response status code: {response.status_code}')
        except Exception as e:
            print(f'Error occurred: {str(e)}')
            return None


if __name__ == '__main__':
    appid = 'wx86a78f7ced7dc55f'
    payload = {
        'appid': appid
    }
    response=requests.post("https://kainy.cn/api/weapp/info/",data=payload)
    print(response.json())
