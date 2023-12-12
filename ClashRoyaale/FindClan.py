import requests
import json
import pandas as pd


# 設定 API 金鑰
API_KEY = ""
headers = {
    "Authorization": "Bearer {}".format(API_KEY)
}

# 取得部落標籤
clan_tag = "%23QCRY22P8"

# 建立請求
url = "https://api.clashroyale.com/v1/clans/{}".format(clan_tag)
response = requests.get(url, headers=headers)

# 處理回應
try:
    if response.status_code == 200:
        clan = response.json()

        # 建立 DataFrame
        df = pd.DataFrame(clan["memberList"])

        # 儲存為 Excel
        df.to_excel("clan.xlsx")
    else:
        print(response.status_code)
except Exception as e:
    print(e)