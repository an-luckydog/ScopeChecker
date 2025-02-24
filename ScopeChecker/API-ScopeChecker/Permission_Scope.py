import pandas as pd

# 读取 CSV 表格
superApp_scope_df = pd.read_csv('D://Scope.csv')  # superApp对应scope表
test_df = pd.read_csv('D://API-Scope Mapping.csv')  # APINAT检测完毕，superApp API -> system API -> permission -> scope

# 处理函数
def compare_permission_scope(permission, scope, recursive=False, depth=0):
    result = ""  # 用于存储结果

    # 限制递归深度，超过10次则返回fail
    if depth > 10:
        print("递归深度超过10次，设置为fail")
        return "fail"

    # 1. 如果 permission 和 scope 完全相同
    if permission == scope:
        print(f"保留该scope: {scope}")
        result = f"{scope}"
        return result

    # 2. 如果 permission 为空，scope 不为空
    if not permission and scope:
        print(f"删除该scope: {scope}")
        result = f"{scope}"
        return result

    # 3. 如果 permission 不为空，scope 为空
    if permission and not scope:
        print(f"增加该permission到scope: {permission}")
        result = f"{permission}"
        return result

    # 4. 如果 permission 和 scope 都不为空且不同
    # 获取 permission 和 scope 对应的 API 集合
    permission_apis = test_df.loc[test_df['Permission'] == permission, 'SuperApp API'].values
    scope_apis = test_df.loc[test_df['Scope'] == scope, 'SuperApp API'].values
    # 4.1 获取 permission 和 scope 对应的 API 集合相同
    if set(permission_apis) == set(scope_apis):
        print(f"保留该scope: {scope}")
        result = f"{scope}"
    # 4.2 获取 permission 和 scope 对应的 API 集合不同
    else:
        # 查找superApp的 scope 数量
        scope_count = superApp_scope_df.apply(lambda col: scope in col.values, axis=0).sum()
        # 超过半数存在，是普遍设定
        if scope_count > 2:
            print(f"经过统一后保留该scope: {scope}")
            result = f"{scope}"
        # 未超过半数存在，不是普遍设定
        else:
            # 如果不是普遍设定，递归获取其他api并进行检查
            for api in permission_apis:
                # 查找该api在 api_result 表中的行
                api_row = test_df[test_df['SuperApp API'] == api]
                if not api_row.empty:
                    # 获取该API的 permission 和 scope，递归调用 compare_permission_scope
                    api_permission = api_row.iloc[0]['Permission']
                    api_scope = api_row.iloc[0]['Scope']
                    print(f"递归比较：permission={api_permission}, scope={api_scope}, 当前递归深度={depth + 1}")
                    result = compare_permission_scope(api_permission, api_scope, recursive=True, depth=depth + 1)
                    if result:  # 如果递归结果不为空，则终止递归
                        return result

    return result

# 更新API-Scope Mapping表格
test_df['Standard_scope'] = test_df.apply(
    lambda row: compare_permission_scope(row['Permission'], row['Scope']), axis=1
)

# 保存更新后的表格
test_df.to_csv('D://API-Scope Mapping.csv', index=False)