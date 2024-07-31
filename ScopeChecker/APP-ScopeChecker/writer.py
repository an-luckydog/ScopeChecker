import os
import pandas as pd
import csv
from utils.appid2name import appid2name


class ResultWriter:
    def __init__(self, filepath, problem_apis, append=True, type='wx'):
        self.filepath = filepath
        self.problem_apis = problem_apis
        self.type = type
        if not os.path.exists(os.path.join(self.filepath, 'applet_info.csv')) or not append:
            with open(os.path.join(self.filepath, 'applet_info.csv'), 'w', encoding='utf-8', newline='') as f:
                writer = csv.writer(f)
                header = ['appid', 'appname', 'description', 'uses_count', 'prncipal_name']
                header.extend(problem_apis)
                writer.writerow(header)

    def write(self, result):
        data = []
        for i in range(len(result.problem_file_path)):
            data.append(
                [result.problem_file_path[i], result.problem_function_name[i], result.problem_api[i],
                 result.occurrences_in_frontend[i]])
        df = pd.DataFrame(data, columns=['problem_file_path', 'problem_function_name', 'problem_api',
                                         'occurrences_in_frontend'])
        df.to_csv(os.path.join(self.filepath, result.appid + '.csv'), index=False)
        with open(os.path.join(self.filepath, 'applet_info.csv'), 'a', encoding='utf-8', newline='') as f:
            writer = csv.writer(f)
            if self.type != 'wx':
                appname = "unknown"
                description = "unknown"
                uses_count = "unknown"
                principal_name = "unknown"
                row = [result.appid, appname, description, uses_count, principal_name]
                for api in self.problem_apis:
                    row.append(result.problem_api.count(api))
            else:
                try:
                    response = appid2name(result.appid)
                    appname = response["data"]["nickname"]
                    description = response["data"]["description"]
                    uses_count = response["data"]["uses_count"]
                    principal_name = response["data"]["principal_name"]
                    row = [result.appid, appname, description, uses_count, principal_name]
                    for api in self.problem_apis:
                        row.append(result.problem_api.count(api))
                except Exception as e:
                    print(f'\033[94mError occurred: {str(e)}\033[0m')
                    appname = "unknown"
                    description = "unknown"
                    uses_count = "unknown"
                    principal_name = "unknown"
                    row = [result.appid, appname, description, uses_count, principal_name]
                    for api in self.problem_apis:
                        row.append(result.problem_api.count(api))
            writer.writerow(row)
