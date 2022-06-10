document.addEventListener('DOMContentLoaded', function () {
    // 令運算元的初始值為0
    let operand_1 = 0
    let operand_2 = 0
    // 令運算子的初始值為空字串
    let operator = ''
    // 令運算結果的初始值為 0 
    let finalResult = 0
    
    // opperand_flag 為 true 時，opperand_1 無值，flag 為 false 時，opperand_1 已填入值
    let opperand_flag = true
    // 令小數點判斷 decimal_flag 的初始值為 false (false：無小數點；true：已有小數點)
    let decimal_flag = false

    let temp = '' 
    
    // 對 parent node 監聽，就可以監聽 parent 底下所有 children nodes 的動作
    document.querySelector('.wrapper').addEventListener('click', function (e) {
        let button_id = e.target.id
        let button_class = e.target.className
        let result = document.querySelector('.result')               

        // 按到 AC 就歸零
        if (e.target.innerText === 'AC') {
            temp = ''
            operand_1 = 0
            operand_2 = 0
            operator = ''
            opperand_flag = true
            decimal_flag = false
        }

        if (temp === '') {
            result.innerText = 0
        }

        // 出現在計算結果的框中的數字
        // 只有數字以及小數點可以輸入
        function get_opperand() {
            if (button_class === 'button number') {
                if (result.innerText === '0') {
                    temp = button_id
                } else {
                    if (button_id === '.'){
                        // 若已有小數點，則第二次點擊小數點字串不讀取
                        if(decimal_flag === true){
                            temp = temp
                        }else{
                            // 第一次點擊小數點，讀取小數點字串，並將小數點判斷的 opperand_flag 轉為 true
                            temp += button_id
                            decimal_flag = true
                        }                        
                    } else{
                        temp += button_id
                    }                    
                }
            }
            result.innerText = temp
            // 將原為字串的 temp 轉為浮點數
            return parseFloat(temp)
        }

        // 取得運算子
        // 取得運算子之後要做第二次的運算元輸入，透過執行自訂的 toggle() 功能，
        // 來轉換 opperand_flag 以切換 get_opperand() return 值的儲存變數，並將小數點及 tmep 等初始值切回預設值
        function get_operator() {
            if (button_class === 'button operator') {
                let temp_op = button_id
                toggle(opperand_flag)
                return temp_op
            }
        }

        // 當前一個運算元已經輸入完畢，就轉換 flag、清空 temp，
        // 並將用來做小數點判斷的 decimal_flag 切回 false，使
        // 下一個運算元可以正確輸入而不會將第一個運算元的數字帶入
        function toggle(key) {
            if (key === true) {
                opperand_flag = false;
                temp = ''
                decimal_flag = false
            } else {
                opperand_flag = true
                temp = ''
                decimal_flag = false
            }
        }

        if (opperand_flag === true) {
            operand_1 = get_opperand()
            operator = get_operator()
        } else {            
            operand_2 = get_opperand()
        }

        // console.log("opperand_flag:", opperand_flag)
        // console.log("od1:", operand_1)
        // console.log('op:', operator)
        // console.log("od2:", operand_2)

        // 依據取得的運算子，分別計算結果
        // 不論選取的是 + - * / 或是 = ，都會將前一回合已經取得的 operand_1 跟 operand_2 的運算結果運算出來
        // 暫未能夠處理浮點數計算後會跑出誤差值的問題
        if (operand_1 !== 0 && operand_2 !== 0 && button_class !== 'button number'){
            // 練習 switch/case 的寫法
            switch (operator){
                case '+':
                finalResult = operand_1 + operand_2
                break

                case '-':
                finalResult = operand_1 - operand_2
                break

                case '*':
                finalResult = operand_1 * operand_2
                break

                case '/':
                finalResult = operand_1 / operand_2
                break
            }
            result.innerText = finalResult

            // 為了可以無限運算下去，次回合之後選取的數字都存入 operand_2，前一回合的運算結果則存入operand_1
            // 為了要可以將次回合選取的數字存入 operand_2，每次運算完都要將 opperand_flag 調回 false 並清空 temp (否則前次的 operand_2 會殘留且併入次回合的輸入結果之中)
            // 取得第二回合的運算子
            operand_1 = finalResult            
            operator = get_operator()      
            opperand_flag = false
            temp = ''
            // console.log("od1_again:", operand_1)
            // console.log('op_again:', operator)
            // console.log("flag_again:", opperand_flag)
        }

        
    })
})