let val = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation"

console.log(val.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," "))
