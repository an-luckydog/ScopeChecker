import pandas as pd
import re

# 预处理
df = pd.read_excel("C:\\Users\\chen'yu\\Desktop\\科研\\小程序安全\\api列表.xlsx")

input_column = "V4.0究极人工"

output_column = "预处理后实际配置"

filtered_words = ["address", "invoice", "invoiceTitle", "userInfo"]

def extract_and_filter(row):
    input_text = row[input_column]
    matches = re.findall(r'scope\.(\w+)', input_text)
    filtered_matches = [match for match in matches if match not in filtered_words]
    return ' '.join(filtered_matches)

df[output_column] = df.apply(extract_and_filter, axis=1)


df.to_excel("C:\\Users\\chen'yu\\Desktop\\科研\\小程序安全\\api列表.xlsx", index=False)

# 比对
df = pd.read_excel("C:\\Users\\chen'yu\\Desktop\\科研\\小程序安全\\api列表.xlsx")

text_column = "预处理后实际配置"
pattern_column = "预处理后标准配置"

output_column = "比对结果"


def kmp_search(text, pattern):
    if pd.isna(text) and pd.isna(pattern):
        return "Right"  # 相同

    if pd.isna(pattern):
        return "Addition"  # 增加

    if pd.isna(text):
        return "Lack"  # 缺失

    if text == pattern:
        return "Right"  # 相同

    if pattern in text:
        return "Redundant"  # 赘余
    else:
        return "confusion"  # 混乱


df[output_column] = df.apply(lambda row: kmp_search(row[text_column], row[pattern_column]), axis=1)

df.to_excel("C:\\Users\\chen'yu\\Desktop\\科研\\小程序安全\\api列表.xlsx", index=False)  # 输出到Excel文件
