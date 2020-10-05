module.exports = function check(str, bracketsConfig) {
    let checking = true;
    while (checking) {
        checking = false;
        for (let i = 0; i < bracketsConfig.length; i++) {
            let configStr = bracketsConfig[i].join("");
            if (str.includes(configStr)) {
                str = str.replace(configStr, "");
                checking = true;
            }
        }
    }

    return str.length ? false : true;
};
