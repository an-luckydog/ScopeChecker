import os
from esprima import esprima


class Result:
    def __init__(self, appid, code_path):
        self.appid = appid
        self.code_path = code_path
        self.problem_file_path = []
        self.problem_function_name = []
        self.problem_api = []
        self.occurrences_in_frontend = []


class AppletAnalyzer:
    def __init__(self, appid, code_path, type):
        self.appid = appid
        self.code_path = code_path
        self.result = Result(appid, code_path)
        self.type = type

    def xml_detect(self, fun, api):
        occurrences = 0
        target = str(fun)[2:-2]
        # 遍历文件夹中的所有文件
        for root, dirs, files in os.walk(self.code_path):
            for file in files:
                # 确保只处理文本文件，你可以根据需要添加更多的文件扩展名
                if file.endswith('.wxml') or file.endswith('.html'):
                    file_path = os.path.join(root, file)
                    try:
                        with open(file_path, 'r', encoding='utf-8') as f:
                            # 逐行读取文件内容并检查是否包含搜索字符串
                            for line in f:
                                if target in line:
                                    print(
                                        f'\033[94m确认在前端文件 {file_path} 中找到匹配: {line}  问题api：{api}\033[0m')
                                    occurrences += 1
                    except Exception as e:
                        print(f'\033[95m处理前端文件 {file_path} 时出错: {str(e)}\033[0m')
        self.result.occurrences_in_frontend.append(occurrences)

    def traverse_and_print_names(self, node, search_strings, file_path):
        global fun
        global na
        if isinstance(node, esprima.nodes.Node):
            if node.__dict__['type'] == 'FunctionExpression':
                fun = na
            if 'name' in vars(node):
                na = {vars(node)['name']}
                node_name = vars(node)['name']
                if node_name in search_strings:
                    print(f'\033[92m在文件 {file_path} 中的方法 {fun} 中找到匹配: {node_name}\033[0m')
                    self.result.problem_file_path.append(os.path.relpath(file_path, self.code_path))
                    self.result.problem_function_name.append(fun)
                    self.result.problem_api.append(node_name)
                    self.xml_detect(fun, search_strings)
            for key, value in vars(node).items():
                if isinstance(value, list):
                    for item in value:
                        self.traverse_and_print_names(item, search_strings, file_path)
                elif isinstance(value, esprima.nodes.Node):
                    self.traverse_and_print_names(value, search_strings, file_path)

    def analyze(self, search_strings):
        # Analyze the applet
        for root, dirs, files in os.walk(self.code_path):
            for file in files:
                # 确保只处理文本文件，你可以根据需要添加更多的文件扩展名
                if file.endswith('.js'):
                    file_path = os.path.join(root, file)
                    try:
                        with open(file_path, 'r', encoding='utf-8') as f:
                            # 逐行读取文件内容并构建 Esprima 语法树
                            js_code = f.read()
                            syntax_tree = esprima.parseScript(js_code)
                            self.traverse_and_print_names(syntax_tree, search_strings, file_path)
                    except Exception as e:
                        print(f'\033[92m处理文件 {file_path} 时出错: {str(e)}\033[0m')

        return self.result
