import os
import esprima
import json

# 定义文件夹路径和搜索字符串
folder_path = 'd://mycamera'
search_strings = ['chooseImage', 'getSetting', 'chooseVideo']

# 用于存储节点及其父节点的映射
node_to_parent = {}

def traverse_and_print_names(node, search_strings, file_path):
    global fun
    global na
    if isinstance(node, esprima.nodes.Node):
        if (node.__dict__['type'] == 'FunctionExpression'):
            fun = na
        if 'name' in vars(node):
            na = {vars(node)['name']}
            node_name = vars(node)['name']
            if node_name in search_strings:
                parent = node_to_parent.get(node)
                pparent = node_to_parent.get(parent)
                print(pparent)
                if (pparent.__dict__['type'] == 'FunctionExpression'):
                    print(f'\033[92m在文件 { file_path} 中的方法 {fun} 中找到匹配: {node_name}\033[0m')
                    flag = 1

        for key, value in vars(node).items():
            if isinstance(value, list):
                for item in value:
                    node_to_parent[item] = node
                    traverse_and_print_names(item, search_strings, file_path)
            elif isinstance(value, esprima.nodes.Node):
                node_to_parent[value] = node
                traverse_and_print_names(value, search_strings, file_path)


# 遍历文件夹中的所有文件
for root, dirs, files in os.walk(folder_path):
    for file in files:
        # 确保只处理文本文件，你可以根据需要添加更多的文件扩展名
        if file.endswith('.js'):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    # 逐行读取文件内容并构建 Esprima 语法树
                    js_code = f.read()
                    syntax_tree = esprima.parseScript(js_code)

                    # 在语法树中查找目标字符串并输出外层方法名
                    for search_string in search_strings:
                        traverse_and_print_names(syntax_tree, [search_string], file_path)

            except Exception as e:
                print(f'\033[92m处理文件 {file_path} 时出错: {str(e)}\033[0m')