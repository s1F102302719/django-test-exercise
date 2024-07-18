        // 要素を取得
        let element = document.getElementById('due_at');
        
        // 要素のテキスト内容を取得
        let targetDateString = element.textContent.trim();

        // 日付文字列からDateオブジェクトを作成
        function parseDateString(dateString) {
            // "2024年7月27日19:10" を "2024-07-27 19:10" に変換
            let [datePart, timePart] = dateString.split('日');
            datePart = datePart.replace('年', '-').replace('月', '-');
            let formattedString = `${datePart.trim()} ${timePart.trim()}`;
            return new Date(formattedString);
        }

        let targetDate = parseDateString(targetDateString);

        // 現在の日付を取得し、時間部分をクリア
        let now = new Date();
        now.setHours(0, 0, 0, 0);

        // 目標の日付の時間部分をクリア
        targetDate.setHours(0, 0, 0, 0);

        // 日付の差をミリ秒単位で計算
        let timeDifference = targetDate - now;

        // ミリ秒を日数に変換
        let daysRemaining = timeDifference / (1000 * 60 * 60 * 24);

        let el=document.getElementById('daysRemaining');

el.textContent=String(`期限まであと: ${daysRemaining}日`);