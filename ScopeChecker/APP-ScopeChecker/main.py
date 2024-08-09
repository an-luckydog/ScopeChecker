import requests
from bs4 import BeautifulSoup

# 定义URL
url = "https://developers.weixin.qq.com/miniprogram/dev/api/"

# 发送GET请求获取网页内容
response = requests.get(url)
response.encoding = 'utf-8'  # 确保正确的编码

# 解析网页内容
soup = BeautifulSoup(response.text, "html.parser")

# 提取API名称
api_names = []
for link in soup.find_all('a', class_='NavigationItem__router-link'):
    text = link.get_text(strip=True)
    if text.startswith("wx."):
        api_names.append(text)

# 打印API名称
for name in api_names:
    print(name)
