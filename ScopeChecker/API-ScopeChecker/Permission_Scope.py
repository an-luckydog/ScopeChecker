import pandas as pd

# Read CSV files
superApp_scope_df = pd.read_csv('D://Scope.csv')  # superApp corresponding scope table
test_df = pd.read_csv('D://API-Scope Mapping.csv')  # APINAT detection completed, superApp API -> system API -> permission -> scope

# Processing function
def compare_permission_scope(permission, scope, recursive=False, depth=0):
    result = ""  # Used to store the result

    # Limit recursion depth, return "fail" if it exceeds 10
    if depth > 10:
        print("Recursion depth exceeds 10, setting result to 'fail'")
        return "fail"

    # 1. If permission and scope are exactly the same
    if permission == scope:
        print(f"Keep this scope: {scope}")
        result = f"{scope}"
        return result

    # 2. If permission is empty and scope is not empty
    if not permission and scope:
        print(f"Remove this scope: {scope}")
        result = f"{scope}"
        return result

    # 3. If permission is not empty and scope is empty
    if permission and not scope:
        print(f"Add this permission to scope: {permission}")
        result = f"{permission}"
        return result

    # 4. If both permission and scope are not empty and different
    # Get the API sets corresponding to permission and scope
    permission_apis = test_df.loc[test_df['Permission'] == permission, 'SuperApp API'].values
    scope_apis = test_df.loc[test_df['Scope'] == scope, 'SuperApp API'].values

    # 4.1 If the API sets corresponding to permission and scope are the same
    if set(permission_apis) == set(scope_apis):
        print(f"Keep this scope: {scope}")
        result = f"{scope}"
    # 4.2 If the API sets corresponding to permission and scope are different
    else:
        # Find the number of superApp scopes
        scope_count = superApp_scope_df.apply(lambda col: scope in col.values, axis=0).sum()
        # If it exceeds half, it is a common setting
        if scope_count > 2:
            print(f"Retain this scope after unification: {scope}")
            result = f"{scope}"
        # If it does not exceed half, it is not a common setting
        else:
            # If it is not a common setting, recursively check other APIs
            for api in permission_apis:
                # Find the row of this API in the api_result table
                api_row = test_df[test_df['SuperApp API'] == api]
                if not api_row.empty:
                    # Get the permission and scope of this API, recursively call compare_permission_scope
                    api_permission = api_row.iloc[0]['Permission']
                    api_scope = api_row.iloc[0]['Scope']
                    print(f"Recursive comparison: permission={api_permission}, scope={api_scope}, current recursion depth={depth + 1}")
                    result = compare_permission_scope(api_permission, api_scope, recursive=True, depth=depth + 1)
                    if result:  # If the recursive result is not empty, terminate recursion
                        return result

    return result

# Update the API-Scope Mapping table
test_df['Standard_scope'] = test_df.apply(
    lambda row: compare_permission_scope(row['Permission'], row['Scope']), axis=1
)

# Save the updated table
test_df.to_csv('D://API-Scope Mapping.csv', index=False)