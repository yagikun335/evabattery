document.addEventListener("DOMContentLoaded", () => {
  const batteryLevelElement = document.getElementById("battery-level");
  const chargingStatusElement = document.getElementById("charging-status");
  const refreshButton = document.getElementById("refresh-button");

  // バッテリー情報を取得して表示
  async function updateBatteryInfo() {
    if (!navigator.getBattery) {
      batteryLevelElement.textContent = "対応していません";
      chargingStatusElement.textContent = "対応していません";
      return;
    }

    const battery = await navigator.getBattery();
    batteryLevelElement.textContent = `${Math.round(battery.level * 100)}%`;
    chargingStatusElement.textContent = battery.charging ? "充電中" : "放電中";
  }

  // 初回ロード時に情報を更新
  updateBatteryInfo();

  // ボタンを押したときに情報を更新
  refreshButton.addEventListener("click", updateBatteryInfo);
});
