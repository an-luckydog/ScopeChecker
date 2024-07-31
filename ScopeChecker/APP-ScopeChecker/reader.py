import os


class AppletPathReader:
    def __init__(self, path: str,type: str):
        self.path = path
        self.type = type

    # return an iterator of (appid, path) pairs
    # 具体的实现细节：
    # 1. 小程序文件夹以appid命名，所以可以通过遍历path下的文件夹，找到以wx开头的文件夹。
    # 2. 该文件位于appid/xx/__APP__.wxapkg，xx为一随机数字，所以需要向下访问两层。
    def __iter__(self) -> (str, str):
        """
        Returns:
        --------
        appid: str
            小程序的appid
        path: str
            __APP__.wxapkg文件或者小程序代码的路径
        """
        if self.type == 'wx':
            for appid in os.listdir(self.path):
                if appid.startswith('wx'):
                    for random_dir in os.listdir(os.path.join(self.path, appid)):
                        if os.path.isdir(os.path.join(self.path, appid, random_dir)):
                            for file in os.listdir(os.path.join(self.path, appid, random_dir)):
                                if file == '__APP__.wxapkg':
                                    yield appid, os.path.join(self.path, appid, random_dir, file)
        elif self.type == 'swan':
            for appid in os.listdir(self.path):
                if len(appid) == 32:
                    for random_dir in os.listdir(os.path.join(self.path, appid)):
                        if os.path.isdir(os.path.join(self.path, appid, random_dir)):
                            yield appid, os.path.join(self.path, appid, random_dir)
        else:
            raise ValueError('Invalid type')
