
// WMO天気コード（数字）を受け取って、日本語の天気名を返す
export function codeToText(code) {
  if (code === 0) return "快晴";
  if (code <= 1) return "晴れ";
  if (code <= 3) return "曇り";
  if (code <= 48) return "霧";
  if (code <= 63) return "雨";
  if (code <= 65) return "大雨";
  if (code <= 77) return "雪";
  if (code <= 82) return "にわか雨";
  return "雷雨";
}