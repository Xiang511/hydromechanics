# 執行 Python 腳本
python test.py;
node test.js;
# 檢查是否有變更
# 執行 git status --porcelain 命令，並將結果賦值給變數 $changes
$changes = git status --porcelain

# 輸出 "Git status output:" 到控制台
Write-Output "Git status output:"

# 輸出 $changes 變數的內容到控制台
Write-Output $changes
if ($changes) {
    Write-Output "Changes detected. Proceeding with commit."
    
    # 設定 Git 使用者資訊
    git config --global user.name "Xiang511"
    git config --global user.email "toby91511@gmail.com"

    git pull origin main
    # 添加變更並 commit
    git add -A
    
    # 取得現在時間
    $currentTime = Get-Date -Format "MM-dd"
    git commit -m "docs: $currentTime Updated season information "

    git push origin main
} else {
    Write-Output "No changes to commit."
}