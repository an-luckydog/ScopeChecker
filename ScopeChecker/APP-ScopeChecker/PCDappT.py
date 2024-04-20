import os

from esprima import esprima


def get_nth_folder_and_innermost_file(directory, n):
    contents = os.listdir(directory)
    folder_count = 0

    for content in contents:
        content_path = os.path.join(directory, content)

        if os.path.isdir(content_path):
            folder_count += 1
            if folder_count == n:
                # 如果是第n个文件夹，记录其名称
                target_folder_name = content
                innermost_file = None

                for root, dirs, files in os.walk(content_path):
                    for file in files:
                        # 遍历第n个文件夹的所有文件，找到最底层的文件
                        innermost_file = os.path.join(root, file)

                if innermost_file:
                    return target_folder_name, innermost_file

    return None, None


directory_path = 'D:\\WeChat\\ChatData\\WeChat Files\\Applet'
n = 3

target_folder_name, innermost_file_path = get_nth_folder_and_innermost_file(directory_path, n)

if target_folder_name:
    print(f"第{str(n)}个文件夹的名称: {target_folder_name}")

if innermost_file_path:
    print(f"第{str(n)}个文件夹中最底层文件的路径: {innermost_file_path}")

import subprocess

# 要执行的命令
command1 = 'pc_wxapkg_decrypt.exe -wxid '

# 使用subprocess运行命令
try:
    subprocess.run(command1 + target_folder_name + ' -in ' + '"' + innermost_file_path + '"', shell=True, check=True)
    print("命令成功执行")
except subprocess.CalledProcessError as e:
    print(f"命令执行失败，返回码：{e.returncode}")
except Exception as e:
    print(f"发生错误：{str(e)}")

# 要执行的命令
command2 = 'node wuWxapkg.js D:\\wxappUnpacker-master\\dec.wxapkg'

# 使用subprocess运行命令
try:
    subprocess.run(command2, shell=True, check=True)
    print("命令成功执行")
except subprocess.CalledProcessError as e:
    print(f"命令执行失败，返回码：{e.returncode}")
except Exception as e:
    print(f"发生错误：{str(e)}")

# 搜索的文件夹路径
folder_path = 'D:\\wxappUnpacker-master\\dec'
# 要搜索的字符串列表
search_strings = ['chooseImage', 'chooseVideo', 'chooseMedia', 'getClipboardData']
flag = 0


# 定义文件夹判空方法
def is_folder_empty(folder_path):
    with os.scandir(folder_path) as entries:
        return not any(entries)


if is_folder_empty(folder_path):
    flag = 2





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
                print(f'\033[92m在文件 { file_path} 中的方法 {fun} 中找到匹配: {node_name}\033[0m')
                xml_detect(fun,search_string)
                flag =1
        for key, value in vars(node).items():
            if isinstance(value, list):
                for item in value:
                    traverse_and_print_names(item, search_strings, file_path)
            elif isinstance(value, esprima.nodes.Node):
                traverse_and_print_names(value, search_strings, file_path)

def xml_detect(fun,api):
    target = str(fun)[2:-2]
    # 遍历文件夹中的所有文件
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            # 确保只处理文本文件，你可以根据需要添加更多的文件扩展名
            if file.endswith('.wxml'):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        # 逐行读取文件内容并检查是否包含搜索字符串
                        for line in f:
                            if target in line:
                                flag = 1
                                print(f'\033[94m确认在前端文件 {file_path} 中找到匹配: {line}  问题api：{api}\033[0m')
                except Exception as e:
                    print(f'\033[94m处理前端文件 {file_path} 时出错: {str(e)}\033[0m')


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

if flag == 0:
    print(f'\033[92m未发现异常api\033[0m')
else:
    print(f'\033[92mscr文件夹为空，检测失败\033[0m')
import shutil


def clear_folder_contents(folder_path):
    try:
        # 遍历文件夹内的所有内容并删除
        for filename in os.listdir(folder_path):
            file_path = os.path.join(folder_path, filename)
            if os.path.isfile(file_path):
                os.unlink(file_path)  # 删除文件
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)  # 递归删除子文件夹

        print(f"成功清空文件夹: {folder_path}")
    except Exception as e:
        print(f"清空文件夹失败: {e}")


# 初始化
# 调用函数清空微信文件夹内容
folder_to_clear = 'D:\\WeChat\\ChatData\\WeChat Files\\Applet'
clear_folder_contents(folder_to_clear)
# 清空解密后的文件
os.unlink('D:\\wxappUnpacker-master\\dec.wxapkg')
print(f"成功清空文件夹: D:\\wxappUnpacker-master\\dec.wxapkg")
# 调用函数清空反编译后的文件
folder_to_clear = 'D:\\wxappUnpacker-master\\dec'
clear_folder_contents(folder_to_clear)
