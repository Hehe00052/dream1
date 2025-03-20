// Cấu trúc dữ liệu cho các ngữ cảnh và lựa chọn
const gameContexts = {
    // Ngữ cảnh bắt đầu
    "context_1": {
        "description": "Bạn thức dậy sau một giấc ngủ dài. Hội bạn bắt đầu hối thúc bạn chuẩn bị để đi đảo trước khi kết thúc chuyến du lịch.",
        "choices": [
            {"id": "context_1A", "text": "Ngủ thêm 30p"},
            {"id": "context_2", "text": "Thức dậy và chuẩn bị đồ"}
        ]
    },
    
    // Nhánh 1A
    "context_1A": {
        "description": "Bạn mơ thấy một giấc mơ kì lạ, bạn bước đến, một nhân ngư xuất hiện. <br> Nhân ngư đó tóc dài nhưng rối và bết, răng nanh nhọn hoắc còn vương máu. </br> Nhân ngư ấy đã thấy bạn. Nó vồ tới, bạn cảm thấy bụng mình đau nhói. <br> Bạn thức dậy, trong tình trạng Bảo Dương-đứa bạn cấp 3 đá vào bụng bạn:<br> \"Còn sống không? Thức mau còn đi\" <br> Bạn lờ mờ tỉnh dậy.",
        "choices": [
            {"id": "context_2", "text": "Mặc vội quần áo và lấy balo đã chuẩn bị từ trước rồi đi theo"}
        ]
    },

    
    // Lựa chọn 2
    "context_2": {
        "description": "Đến đảo, Thúy Hằng, bạn thân của bạn, đề nghị cả đội đi đường vòng để qua đền, nghe nói ở đây có ngôi đền thiêng trên con dốc qua đầm nuôi cá trước khi về tàu rời đảo. Cả đội hào hứng và quyết định ghé thăm nơi đây. Nhưng không quyết định được nên ăn trước rồi đi, hay lên đến đền rồi ăn. Biểu quyết ngang nhau, lựa chọn của bạn sẽ quyết định:",
        "choices": [
            {"id": "context_2A", "text": "Lên đền rồi ăn"},
            {"id": "context_2B", "text": "Ăn trước"}
        ]
    },
    
    // Nhánh 2A
    "context_2A": {
        "description": "Cả đội thống nhất lên chùa rồi ăn. Mọi người vừa đi vừa trò chuyện. Chẳng mấy chốc đã đến cổng đền, mọi người vào cổng. Đây là một ngôi chùa to, nhưng chạm khắc, hoa văn kì lạ, thậm chí có hình đầu lâu, không khí có vẻ tĩnh lặng thay vì thanh tịnh, người ở đây cũng rất ít. Cả đội đi viếng đền, tuy nhiên ở đây không có hương, cũng không có tượng thờ hay ghi chú để biết nơi đây thờ ai nhưng cột cờ, cột đá, đá tảng kì lạ, có 1 thùng công đức. Thúy Hằng đại diện bỏ tiền vào thùng công đức, mọi người còn lại dọn dẹp sơ bộ và nhìn ngắm kiến trúc kì lạ này. Bạn thấy người giữ đền đứng từ sân sau, đang nhìn bạn. Bạn đang nghĩ đến việc sẽ ăn gì khi ra khỏi đền.",
        "choices": [
            {"id": "context_2A1", "text": "Bắt đầu chủ đề trò chuyện với đám bạn về vấn đề ăn uống."},
            {"id": "context_2A2", "text": "Bắt chuyện và hỏi người giữ đền về chỗ ăn"}
        ]
    },
    
    // Nhánh 2B
    "context_2B": {
        "description": "Cả đội ghé vào quán mì cay gần đây. <br> Bạn theo thói quen muốn gọi mì cay hải sản, tuy nhiên nhớ tới gần đây là trại cá nên muốn thử mì cay cá",
        "choices": [
            {"id": "context_2B1", "text": "Chọn mỳ cay hải sản"},
            {"id": "context_2B2", "text": "Chọn mỳ cay cá"}
        ]
    },
    
    // Nhánh 2A.1
    "context_2A1": {
        "description": "Bạn tự đề xuất ăn mì cay ở quán trên đường đến đây. Bảo Dương phản đối với lý do ăn mì cay dễ bị nhiệt. Vi Trí không ý kiến về vấn đề đồ ăn. Thúy Hằng cũng muốn ăn mì cay. Đang tranh cãi thì người giữ đền đi đến nói: \"Các con đừng đi đường vòng nữa, quay lại đường chính đi\". Nói xong, người giữ đền rời đi. \"Ơ sao thế nhỉ?\" <br> \"Chắc đường đang được sửa hay sao đó hả?\" <br>\"Thế đi đường ngược về hay sao? Vậy chán lắm trời ơi\" <br>...<br>\"Thôi bà đó xàm đó, kệ mẹ bả đi\" <br> Cả đám vẫn quyết định đi thăm trại cá",
        "choices": [
            {"id": "context_3", "text": "Dọn dẹp xong, bắt đầu đi ăn thôi"}
        ]
    },
    
    // Nhánh 2A.2
    "context_2A2": {
        "description": "Bạn vừa tiến đến người giữ đền vừa hỏi: \"Cô ở đây ạ? Kiến trúc đền mình lạ quá cô hen, đền mình thờ ai vậy ạ?\" Người giữ đền im lặng một lát rồi trả lời: \"Không phải thờ đâu con ơi, là đang trấn giữ...\" Từ xa vang lại tiếng của Thúy Hằng: \"ei ei, xíu nữa đi ăn mì cay nhá\" Bạn đáp lại Thúy Hằng rồi quay lại tiếp tục cuộc trò chuyện với người giữ đền: \"dạ? Thờ ai ạ?\" Người giữ đền lắc đầu, hỏi lại: \"là tiệm mì trên đường đến đây sao? Ăn xong đi đường đó về luôn đi, đừng đi đường vòng nữa nhen con\" Nói rồi người giữ đền rời đi. Bạn kể lại với đám bạn về cuộc trò chuyện.\"Ơ sao thế nhỉ?\" <br> \"Chắc đường đang được sửa hay sao đó hả?\" <br>\"Thế đi đường ngược về hay sao? Vậy chán lắm trời ơi\" <br>...<br>\"Thôi bà đó xàm đó, kệ mẹ bả đi\" <br> Cả đám vẫn quyết định đi thăm trại cá",
        "choices": [
            {"id": "context_3", "text": "Dọn dẹp xong, bắt đầu đi ăn thôi"}
        ]
    },
    
    // Nhánh 2B.1
    "context_2B1": {
        "description": "Mọi người vừa ăn vừa trò chuyện. Sau khi ăn xong mọi người bắt đầu lên đền",
        "choices": [
            {"id": "context_2B_12", "text": "Tiếp tục cuộc hành trình"}
        ]
    },
    
    // Nhánh 2B.2
    "context_2B2": {
        "description": "Khi chủ quán nghe bạn gọi món cá, chủ quán mỉm cười: \"Là dân ở đây dắt bạn về nhỉ?\" <br> Khi mỳ đem ra, chỉ có đầu cá, không có phần thân và các phần thịt khác. <br>Sau khi ăn xong mọi người bắt đầu lên đền.",
        "choices": [
            {"id": "context_2B_12", "text": "Tiếp tục cuộc hành trình"}
        ]
    },

   "context_2B_12": {
        "description": "Mọi người vừa đi vừa trò chuyện. Chẳng mấy chốc đã đến cổng đền, mọi người vào cổng. Đây là một ngôi đền to, nhưng chạm khắc, hoa văn kì lạ, thậm chí có hình đầu lâu, không khí có vẻ tĩnh lặng thay vì thanh tịnh, người ở đây cũng rất ít. Cả đội đi viếng đền, tuy nhiên ở đây không có hương, cũng không có tượng thờ hay ghi chú để biết nơi đây thờ ai có nhưng cột cờ, cột đá, đá tảng kì lạ, có 1 thùng công đức. Thúy Hằng đại diện bỏ tiền vào thùng công đức, mọi người còn lại dọn dẹp sơ bộ và nhìn ngắm kiến trúc kì lạ này. Viếng đền xong, cả đám đi thăm trại cá",
        "choices": [
            {"id": "context_3", "text": "Tiếp tục cuộc hành trình"}
        ]
    },
    
    // Lựa chọn 3
    "context_3": {
        "description": "Cả đám lần lượt thả dốc 2 người 1 xe xuống đường ruộng quanh ao cá. Bảo Dương chở bạn, Vi Trí chở Thúy Hằng.<br>Đó là một con dốc dài, dốc và gồ ghề. Dọc 2 bên đường là các ao cá to. Nước ao trong lành sạch sẽ, mùi cá thoang thoảng, không khí mát lạnh làm bạn rất thích. Mọi người vui vẻ trò chuyện reo hò.<br>Càng đi các ao cá càng ít cá hơn, nhưng những con cá càng to và khoẻ hơn, thỉnh thoảng còn có vài con nhảy ngang mặt ao.<br>Lại đến 1 con dốc khác. Tuy nhiên nó để bảng: \"Không phận sự cấm vào\", đó là 1 chiếc bảng viết tay thủ công, dính bùn và đã cũ kĩ, nhưng không hề có hàng rào hay đồ chặn hay bất cứ gì khác tương tự. Thúy Hằng mở google map ra kiểm tra lần nữa, map hiển thị chỉ cần đi thêm 1.3km là ra đường chính, nơi xe trung chuyển sẽ đến đón. Nhưng nếu quay lại sẽ phải mất 3h, chắc chắn sẽ không kịp xe, và trễ tàu.<br>\"Chắc thằng khùng nào khi trước rào lên giữ đất thôi\" Bảo Dương lên tiếng, không còn lựa chọn, cả đám tiếp tục đi.<br>Khi lên con dốc và thả dốc xuống, khung cảnh khiến bạn và tất cả mọi người ngạc nhiên, các hồ cá... À không, giờ như các bể bơi lớn bé nằm cạnh nhau, nước trong nhưng sâu thẳm, không thấy đáy. Đột nhiên, bạn để ý có ai đó hình như đang bơi lội trong 1 hồ, tuy nhiên có điểm gì đó không đúng lắm...<br>Rầm rầm Một tiếng động lớn vang lên phía trước, Vi Trí bị lệch bánh xe, mọi người dừng lại chạy đến đỡ Vi Trí lên, xe đã bị rơi xuống nước, cả bọn cùng nhau cố gắng kéo xe lên nhưng xe đã vào nước và không chạy được. Dù sao nhìn phía trước cũng chỉ còn một đoạn rất ngắn, có thể thấy được đường chính rồi, cả đám quyết định để xe lại ở đây và đi bộ. Dù sao quãng đường phía trước chỉ đủ để 2 người đi sát vào nhau 1 lượt, chạy xe là quá nguy hiểm. Tất cả xe sẽ được để phía dưới con dốc này và nhờ chủ xe đến lấy về.<br>Đang đi thì bỗng nhiên bạn thấy cảm giác có ai đó ôm bạn và Thúy Hằng, Bảo Dương, Vi Trí, rồi bắt ngờ vật mạnh Thúy Hằng xuống dưới hồ. Bạn hoảng hốt nhìn theo. Đó là... một... Nhân ngư?... Đang vồ lấy Thúy Hằng phía bên bạn, máu me bê bết. Nhân ngư đó khuôn mặt ghê tởm, đuôi của nhân ngư đó đẹp, một vẻ đẹp vô cùng. Nhưng phần trên có mang tai, tóc dài và bết, răng nhọn hoắt và lởm chởm.<br>Bạn cùng Bảo Dương, Vi Trí cũng bị một nhân ngư khác vật xuống theo. Bạn mau chóng leo lên bờ, vừa lên tới bạn nghe tiếng mọi người ở dưới: \"Chạy đi, đừng quay lại\"<br>Bạn nhìn xuống hồ, cả người bạn của bạn đang giãy dụa, máu loang cả hồ. Lũ nhân ngư hết dùng móng vuốt lại dùng miệng cắn xé từ phần chân lên thân. <br> Bạn...",
        "choices": [
            {"id": "context_3A", "text": "Lập tức lấy cây dao trong cặp, rồi cố kéo người gần bạn nhất lên"},
            {"id": "context_3B", "text": "Bỏ chạy"}
        ]
    },
    
    // Nhánh 3A
    "context_3A": {
        "title": "Opening Ending: Không phải anh hùng nào cũng khoác áo choàng",
        "description": "Bạn lấy ra cây dao và kéo tự vệ đã luôn được chuẩn bị sẵn từ trong balo ra. Bạn đâm liên tục vào lũ nhân ngư, cố gắng kéo người bạn gần nhất lên bờ. Bạn cố gắng cứu người bạn, nhưng nhân ngư cắn bạn vào chân, bạn ngã xuống hồ. Nhưng một ít sự cố gắng của bạn đã giúp Thúy Hằng có cơ hội vùng ra, Bảo Dương và Vi Trí có vẻ cũng đã thoát ra được. Bạn cảm thấy mình đang chìm dần, mọi thứ trở nên mờ nhạt. Hình ảnh cuối cùng bạn thấy là cả 3 đã bám vào được bờ đê. Hi vọng họ sẽ thoát.",
        "choices": [
            {"id": "ending_hope", "text": "Bạn nhắm mắt lại, không ngừng cầu nguyện cho họ"},
        ]
    },
    
    // Nhánh 3B
    "context_3B": {
        "description": "Bạn không biết bơi, và bạn hiểu rằng bạn không thể làm gì khác, lập tức bạn quay đầu bỏ chạy và tìm người giúp đỡ.<br> Dọc đường đi, bạn quan sát thấy tất cả hồ bơi ở đây đều có nhân ngư, và nét mặt lũ nhân ngư càng lúc càng \"người\".<br> Từ chỗ khi nãy bạn bị ngã là hồ to nhất, càng về sau hồ càng nhỏ hơn. Mỗi khi qua mỗi hồ, nhân ngư đều ngoi lên nhìn chằm chằm vào bạn.<br> Các hồ ở giữa đổ đi, không còn nhân ngư ngoi lên từ mặt nước ngấm ngầm muốn vồ bạn nữa.<br> Khi chỉ còn vài hồ là đến bờ để ra, có một dải hồ màu nước khác biệt với những hồ trước đó.<br> Từ xa, bạn thấy có một số người đang ngâm mình dưới nước, đùa giỡn với nhau. Họ toàn mỹ nam, mỹ nữ, giọng nói dễ nghe.<br> Họ cười với bạn, nụ cười dịu dàng, ấm áp, có vẻ vô hại.<br> Lúc này bạn đã rất rất mệt.<br> Bạn...",
        "choices": [
            {"id": "context_3B1", "text": "Đứng lại nhờ họ giúp đỡ"},
            {"id": "context_3B2", "text": "Bỏ qua và chạy đi tiếp "}
        ]
    },
    
    // Nhánh 3B.1
    "context_3B1": {
        "title": "Bad Ending: Sói đội lốt cừu",
        "description": "Bạn quyết định dừng lại nhờ họ giúp đỡ. <br> Vừa thở dốc, bạn vừa miêu tả lại tình hình mà bạn đã trải qua. Họ nghe bạn kể xong, có vẻ do đang gấp và mệt mỏi, họ đang dần bơi tới gần bạn hơn. <br> Và bạn dần nhận ra, họ đang bơi bằng đuôi, họ cũng là nhân ngư. <br> Nhưng đã quá muộn, một nhân ngư đã nhảy lên, vồ lấy bạn. <br> Bạn chết trong sự đau đớn và tiếc nuối. ",
        "choices": [
            {"id": "ending_naive", "text": "Bạn khóc"}
        ]
    },
    
    // Nhánh 3B.2
    "context_3B2": {
        "description": "Bạn nhanh chóng sốc lại tin thần, dù có mệt bạn cũng sẽ thoát khỏi đây. <br> Đám bạn đã hi sinh mạng sống để cứu bạn. Bạn không thể mạo hiểm. <br> Họ-những người dưới hồ bơi lúc này đây vẫn là những \"sinh vật\" trong hồ, ở cái nơi quỷ quái này. ",
        "choices": [
            {"id": "context_4", "text": "Bạn quyết định chạy lướt qua tất cả bằng chút sức lực cuối cùng của mình"}
        ]
    },
    
    // Lựa chọn 4
    "context_4": {
        "description": "Qua hồ nước cuối cùng, bạn đã an toàn ra khỏi đám quỷ quái kia.<br> Bạn thấy một con búp bê ở hồ cuối cùng, cảm giác nó toả ra... Rất lạ. <br> Bạn...",
        "choices": [
            {"id": "context_4A", "text": "Dừng lại xem xét nó"},
            {"id": "context_4B", "text": "Tiếp tục chạy"}
        ]
    },
    
    // Nhánh 4A
    "context_4A": {
        "description": "Bạn dừng lại. Cơ thể bạn tê dại, mắt bạn dần nhoè, tưởng như ngất đi, may mắn thay, bạn đã kịp hít thở. Mọi thứ dần rõ ràng trở lại.<br> Với hi vọng và niềm tin con búp bê này sẽ không giết bạn, bạn hỏi con búp bê ấy về tình trạng hiện tại, về cách cứu những người bạn đang bị tấn công.<br> Búp bê trả lời:<br> \"Khó à nhen, tụi đó mi không cứu được nữa đâu, lo cho thân mi đi, đừng để ai bắt được đấy.<br> Ông ta mà biết thì mi sẽ trở thành một trong số ở đây thôi. Nhưng mà có khi như vậy cũng không quá tệ đâu.<br> Rồi một ngày nào đó ngươi cũng sẽ có thể trà trộn và sống như con người lần nữa thôi. Rồi mi sẽ quên đi chính mình và tái sinh lần nữa.<br> Chà... Đôi mắt ngươi... Có lẽ ngươi còn có thể đứng trên cao như vương như đế, dùng người cá khác dưỡng thọ cho ngươi...<br> Ngươi có thể có cuộc đời bất tử như ông ta... Tùy ngươi thôi. Ta không có hứng thú lắm...\"Búp bê liên tục kể chuyện về từng nhân ngư mà nó ấn tượng với bạn, trong khi bạn dần rời đi.<br> Đến bậc thang rời đi, bạn quay lại cảm ơn nó:<br> \"Tuy không biết tại sao dù bạn không phải là người, nhưng tôi nghĩ bạn là một người tốt. Cảm ơn nhé\"<br> Rồi bạn nhảy xuống. Cố gắng đến chỗ lên xe, và lên tàu rời đảo.<br> Trước khi lên xe ở trước bến tàu nơi đất liền, có một cô gái, dường như không nói được, níu lấy tay bạn không buông.<br> Bạn trở nên tức giận, nhưng cô gái đó vẫn nhìn bạn bằng ánh mắt cầu xin, sợ hãi.<br> Từ xa, một cô gái với vẻ ngoài giận dữ đang hướng bạn mà đi tới trong sự giận dữ khó chịu. Bạn nhận ra mặt cô ta có lớp vảy ở vành tai (nơi thoạt nhìn chỉ nghĩ là cosplay hay style make up).",
        "choices": [
            {"id": "ending_illusion", "text": "Bạn la toáng lên rồi hất tay cô gái đang cầu xin bạn rồi chạy đi"},
            {"id": "ending_true", "text": "Bạn thuyết phục cùng kéo cô gái đang cầu xin bạn rời đi"}
        ]
    },
    
    // Nhánh 4B
    "context_4B": {
        "title": "Ending: The One Mermaid",
        "description": "Bạn leo xuống bậc thang cuối cùng và ra được đường chính. Ngoài đảo vắng người, bạn không tìm thấy ai để cầu cứu.<br> Bạn ngất xỉu.<br> Khi thức dậy, bạn nhận ra mình đang bị trói lại. Một người đàn ông với mang cá và vảy trên mặt đang nhìn bạn:<br> \"À, đúng là một kiệt tác\"<br> \"Đừng lo, tao sẽ biến mày thành một người cá xứng đáng\"<br> \"Đôi mắt này... Mã gen này...\"<br> \"Thật đáng mong chờ\"<br> ",
        "choices": [
            {"id": "ending_king", "text": "Bạn nhìn thấy \"hắn ta\" từng bước mổ xẻ cơ thể của bạn và một con cá khác, một con cá đã mất đầu <br> Bạn dần mất đi ý thức"}
        ]
    },
    
    
    // Các kết thúc
    "ending_hope": {
        "description": "3 tháng sau, theo kênh địa phương đưa tin, 3 người đã được cứu sống từ hồ cá bí ẩn. Thúy Hằng, Bảo Dương và Vi Trí đã được sống sót từ hồ cá bí ẩn. Họ đã báo cáo với cảnh sát về sự việc. Đó là một vụ án tàn nhẫn, nhiều người đã bị bắt và làm \"phẫu thuật\" để trở thành nhân ngư. <br> Theo tên tội phạm khai nhận, hắn cũng là một \"nhân ngư\" do một tai nạn tình cờ, và muốn nuôi những nhân ngư khác để tạo dựng cộng đồng, cũng như lấy mạng họ làm thuốc bổ, theo đuổi sự bất tử. <br> Sau những thông tin đó, tên tội phạm đã tự sát. <br> Vụ án khép lại. <br> Những người bạn sẽ luôn nhớ tới bạn và cảm kích sự hi sinh của bạn, họ coi cha mẹ bạn như cha mẹ mình mà chăm sóc. <br> Tuy không sống sót, nhưng bạn đã trở thành một anh hùng. <br> Họ sẽ sống thay phần của bạn",
        "is_ending": true
    },

    "ending_naive": {
        "description": "3 tháng sau, theo kênh địa phương đưa tin, 4 người du khách đã mất tích trên đảo không một dấu tích. <br> Cảnh sát đã điều tra, nguyên nhân được cho là họ đã té xe và bị chết đuối. <br> Truyền thông đã đưa tin về vụ việc và tai nạn đuối nước được coi trọng và tuyên truyền rộng rãi hơn",
        "is_ending": true
    },
    
    "ending_king": {
        "title": "Ending: The One Mermaid ",
        "description": "...<br> Ba tháng sau, kênh địa phương thông báo có bốn du khách đã mất tích khi ở đảo Mộng Châu.<br> Theo điều tra, có vẻ bốn người đã té xe rơi xuống hồ cá và không may qua đời.<br> ...<br> Ba mươi chín năm sau, một ngư dân đã báo cáo tìm thấy xác của một nhân ngư.<br> Theo khảo nghiệm, điều tra từ chính quyền, đây là một giống loài kì lạ.<br> ...<br> Sáu tháng sau, người ta đã tìm ra những nhân ngư còn sống ở cùng nhau trong một phần giới hạn ở quần đảo Mộng Châu.<br> Họ cười đùa, sinh hoạt, giao tiếp với nhau bằng một loại sóng âm kì lạ. Ở họ có ý thức của con người, tuy nhiên cư xử như loài cá sống theo bầy.<br> Có một cá thể kỳ lạ, dường như là chỉ huy của tất cả những cá thể khác. Con non được cá thể này chăm sóc, gần gũi hơn sẽ thay thế vị trí chỉ huy khi con được cho là chỉ huy chết.<br> Theo quan sát, khi cố đem loài này ra khỏi ranh giới, chúng sẽ trở nên điên cuồng rồi chết.<br> Thật là một loài kỳ lạ!",
        "is_ending": true
    },
        
    "ending_illusion": {
        "title": "Bad Ending: Hoang tưởng",
        "description": "Cô gái đang cầu xin bạn bật khóc trong hoảng sợ và van nài. Bạn không quan tâm và liên tục hất ra, thậm chí hét to lên rồi lập tức chạy đi.<br> Bạn báo cảnh sát.<br> Theo điều tra, đó là ba cái chết do té xe xuống nước và đuối nước.<br> Họ nói bạn đã trở nên hoảng sợ, và tất cả chỉ là hoang tưởng.<br> Bạn sống trong lo sợ, ân hận cùng mâu thuẫn suốt phần đời còn lại.<br> Hòn đảo đó trở thành cơn ác mộng ám ảnh bạn mãi mãi.",
        "is_ending": true
    },

    "ending_true": {
        "title": "TRUE ENDING",
        "description": "Bạn nghĩ cô ấy là nạn nhân giống bạn, chỉ là cô ta đang sợ hãi sau những gì xảy ra và muốn thoát đi nhanh nên mới cư xử kỳ lạ, nén bực tức.<br> Bạn kéo cô ấy theo, vừa kéo vừa nói: \"Sợ cái gì, không muốn cùng chết thì chạy với tôi mau\".<br> Càng đến gần cổng cô ta càng sợ và bấu chặt hơn. Bạn kiên quyết kéo cô ta ra khỏi cổng.<br> Vừa qua khỏi cổng, vẻ mặt cô ta từ thảm thương, lo sợ thành ngạc nhiên. Cô ấy quay lại phía sau nhìn người đang tức giận. Cô gái đang tức giận càng trở nên tức giận hơn, tuy nhiên vẫn không bước ra khỏi cổng mà chỉ đứng đó nổi điên.<br> Sau khi ngẩn ra, cô gái đang bấu lấy bạn buông bạn ra, quay lại và dường như có ý định vươn tay ra dắt cô gái bên kia cổng ra ngoài.<br> Bạn chợt hiểu ra gì đó.<br> Bạn lập tức bỏ chạy, leo lên xe buýt gần nhất.<br> Đột nhiên bạn để ý đến chiếc máy ảnh nhỏ vẫn được đeo chéo quanh người bạn từ đảo.<br> Thỉnh thoảng nó sẽ nháy đỏ hai cái liên tục.<br> Có vẻ... Đối với một số \"người\", nó sẽ hoạt động như vậy.<br> Có một cô bé trên buýt cùng bạn đã để ý thấy bạn, cô bé nhìn chằm chằm vào mắt bạn, bạn nhận ra, rùng mình, cùng lúc ấy máy bạn nháy đỏ hai cái. Cô bé ấy bắt chuyện với bạn. Bạn nghĩ cô bé thật thân thiện và dễ thương.<br> Bạn và cô bé kết bạn Facebook với nhau, dù trong lòng bạn có cảm giác bất an, hối hận mãnh liệt.<br> Cô bé dùng một tấm hình trên Facebook của bạn, trong đó bạn cười híp mắt. Cô bé liên tục quay xuống đưa hình bạn cho mẹ cô ấy và hỏi mẹ cô bé có thấy bạn đẹp không. Mẹ cô ấy liên tục trả lời không, và đáp lời cho có lệ.<br> Cho tới khi, cô bé bảo:<br> \"Mẹ nhìn mắt chị ta đi ạ? Thế này mà không đẹp à?\"<br> Mẹ cô ấy nhìn lướt qua bạn, sững lại, và rồi cười sởi lởi:<br> \"Ừ đẹp lắm\".<br> \"Thật đẹp\".<br> Mẹ cô bé và cô bé bắt đầu trở nên đáng sợ.<br> Bạn chợt nhớ tới lúc trên đảo.<br> Bạn nhớ tới hai cô gái ở bến tàu.<br> Bạn nhận ra gì đó.<br> Nhưng bạn đã lỡ đưa ra thông tin liên lạc, bạn đã để lại dấu vết quá nhiều.<br> Bạn hoảng loạn.<br> Trong lúc hoảng loạn, bạn nhìn xuống bàn tay mình.<br> Là sáu ngón.<br> Bạn giật mình.<br> Bạn thức dậy.<br> Bạn vẫn nằm trên giường ngủ của mình.<br> Thật may đó chỉ là một giấc mơ kỳ lạ.<br>",
        "is_ending": true
    }
};

// Các phần tử DOM
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const contextTitle = document.getElementById('context-title');
const contextDescription = document.getElementById('context-description');
const choicesContainer = document.getElementById('choices');
const endingContainer = document.getElementById('ending');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');

// Biến lưu trữ ngữ cảnh hiện tại
let currentContext = 'context_1';
let hasReachedTrueEnding = false;

// Hàm hiển thị ngữ cảnh
function showContext(contextId) {
    const context = gameContexts[contextId];
    
    // Cập nhật tiêu đề và mô tả
    contextTitle.textContent = context.title;
    contextDescription.textContent = context.description;
    contextDescription.innerHTML = context.description.replace(/\n/g, '<br>');
    
    // Xóa các lựa chọn cũ
    choicesContainer.innerHTML = '';

    
    // Kiểm tra xem đây có phải là một kết thúc không
    if (context.is_ending) {
        // Kiểm tra nếu đây là TRUE ENDING
        if (context.title === "TRUE ENDING") {
            hasReachedTrueEnding = true;
            restartButton.textContent = "Mơ lại lần nữa";
        } else if (hasReachedTrueEnding) {
            // Giữ nguyên nội dung "Mơ lại lần nữa" nếu đã đạt được TRUE ENDING trước đó
            restartButton.textContent = "Mơ lại lần nữa";
        } else {
            restartButton.textContent = "Sống lại lần nữa";
        }
        
        choicesContainer.style.display = 'none';
        endingContainer.style.display = 'block';
    } else {
        // Hiển thị các lựa chọn mới
        choicesContainer.style.display = 'flex';
        endingContainer.style.display = 'none';
        
        context.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.className = 'choice-btn';
            button.addEventListener('click', () => {
                // Hiệu ứng chuyển cảnh
                gameScreen.classList.remove('fade-in');
                void gameScreen.offsetWidth; // Trigger reflow
                gameScreen.classList.add('fade-in');
                
                // Cập nhật ngữ cảnh hiện tại và hiển thị
                currentContext = choice.id;
                showContext(currentContext);
            });
            choicesContainer.appendChild(button);
        });
    }
}

// Xử lý sự kiện khi nhấn nút bắt đầu
startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    gameScreen.classList.add('fade-in');
    showContext(currentContext);
});

// Xử lý sự kiện khi nhấn nút chơi lại
restartButton.addEventListener('click', () => {
    currentContext = 'context_1';
    gameScreen.classList.remove('fade-in');
    void gameScreen.offsetWidth; // Trigger reflow
    gameScreen.classList.add('fade-in');
    showContext(currentContext);
});

// Thêm hiệu ứng chuyển cảnh khi tải trang
window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
});