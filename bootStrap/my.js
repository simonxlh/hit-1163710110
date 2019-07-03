$(document).ready(function () {
    $("a[href='##']").click(function () {
        let id = $(this).attr("id");
        if($(`#${id}.nav-link`).length===0){
            const text = "<li  class=\"nav-item \">\n" +
                "                    <a class=\"nav-link \" id=\""+id+"\" onclick='select(this)' href=\"#\">"+ $(this).text()+"<button class=\"btn-sm rounded btn-danger\" href=\"###\" onclick='this.parentNode.parentNode.removeChild(this.parentNode);'>X</button> </a>\n" +
                "                </li>";
            $("#h").append(text);
        }
        $(`#${id}.nav-link`).click();

    });

});
function select(args) {
    $(".nav-link").removeClass("active");
    $(".mainArea").empty();
    switch ($(args).attr("id")) {
        case "codeManagement":
            $(this).attr("class","nav-link active");
            $(".mainArea").css("background-color","yellow");
            $(".mainArea").append("<p> 这是编码管理!</p>")
            break;
        case "bomManagement":
            $(this).attr("class","nav-link active");
            $(".mainArea").css("background-color","#000000");
            $(".mainArea").append("<div class=\"jumbotron\">\n" +
                "  <h1>BOM管理</h1> \n" +
                "  <p>不知道是什么管理！</p> \n" +
                "</div>");
            break;
        case "componentManagement":
            $(this).attr("class","nav-link active");
            $(".mainArea").css("background-color","blue");
            $(".mainArea").append("<div class=\"jumbotron\">\n" +
                "  <h1>零件管理</h1> \n" +
                "  <p>也不知道是什么管理！</p> \n" +
                "</div>");
            break;
            case "userManagement":
            $(this).attr("class","nav-link active");
            $(".mainArea").css("background-color","#008833");
            $(".mainArea").append("<div class=\"container\">\n" +
                "  <h2>带边框表格</h2>\n" +
                "  <p>.table-bordered 类可以为表格添加边框:</p>            \n" +
                "  <table class=\"table table-bordered\">\n" +
                "    <thead>\n" +
                "      <tr>\n" +
                "        <th>Firstname</th>\n" +
                "        <th>Lastname</th>\n" +
                "        <th>Email</th>\n" +
                "      </tr>\n" +
                "    </thead>\n" +
                "    <tbody>\n" +
                "      <tr>\n" +
                "        <td>John</td>\n" +
                "        <td>Doe</td>\n" +
                "        <td>john@example.com</td>\n" +
                "      </tr>\n" +
                "      <tr>\n" +
                "        <td>Mary</td>\n" +
                "        <td>Moe</td>\n" +
                "        <td>mary@example.com</td>\n" +
                "      </tr>\n" +
                "      <tr>\n" +
                "        <td>July</td>\n" +
                "        <td>Dooley</td>\n" +
                "        <td>july@example.com</td>\n" +
                "      </tr>\n" +
                "    </tbody>\n" +
                "</table>\n" +
                "</div>");
            break;
        case "roleManagement":
            $(this).attr("class","nav-link active");
            $(".mainArea").css("background-color","#669988");
            $(".mainArea").append("<div class=\"container\">\n" +
                "  <h2>黑色背景表格</h2>\n" +
                "  <p>.table-dark 类可以为表格添加黑色背景：</p>            \n" +
                "  <table class=\"table table-dark\">\n" +
                "    <thead>\n" +
                "      <tr>\n" +
                "        <th>Firstname</th>\n" +
                "        <th>Lastname</th>\n" +
                "        <th>Email</th>\n" +
                "      </tr>\n" +
                "    </thead>\n" +
                "    <tbody>\n" +
                "      <tr>\n" +
                "        <td>John</td>\n" +
                "        <td>Doe</td>\n" +
                "        <td>john@example.com</td>\n" +
                "      </tr>\n" +
                "      <tr>\n" +
                "        <td>Mary</td>\n" +
                "        <td>Moe</td>\n" +
                "        <td>mary@example.com</td>\n" +
                "      </tr>\n" +
                "      <tr>\n" +
                "        <td>July</td>\n" +
                "        <td>Dooley</td>\n" +
                "        <td>july@example.com</td>\n" +
                "      </tr>\n" +
                "    </tbody>\n" +
                "  </table>\n" +
                "</div>");
            break;
        case "menuManagement":
            $(this).attr("class","nav-link active");
            $(".mainArea").css("background-color","#005500");
            $(".mainArea").append("<div class=\"container\">\n" +
                "  <h2>响应式表格</h2>\n" +
                "  <p>.table-responsive 类用于创建响应式表格：在屏幕宽度小于 992px 时会创建水平滚动条，如果可视区域宽度大于 992px 则显示不同效果（没有滚动条）:</p>                                                                                      \n" +
                "  <div class=\"table-responsive\">          \n" +
                "  <table class=\"table\">\n" +
                "    <thead>\n" +
                "      <tr>\n" +
                "        <th>#</th>\n" +
                "        <th>Firstname</th>\n" +
                "        <th>Lastname</th>\n" +
                "        <th>Age</th>\n" +
                "        <th>City</th>\n" +
                "        <th>Country</th>\n" +
                "        <th>Sex</th>\n" +
                "        <th>Example</th>\n" +
                "        <th>Example</th>\n" +
                "        <th>Example</th>\n" +
                "        <th>Example</th>\n" +
                "      </tr>\n" +
                "    </thead>\n" +
                "    <tbody>\n" +
                "      <tr>\n" +
                "        <td>1</td>\n" +
                "        <td>Anna</td>\n" +
                "        <td>Pitt</td>\n" +
                "        <td>35</td>\n" +
                "        <td>New York</td>\n" +
                "        <td>USA</td>\n" +
                "        <td>Female</td>\n" +
                "        <td>Yes</td>\n" +
                "        <td>Yes</td>\n" +
                "        <td>Yes</td>\n" +
                "        <td>Yes</td>\n" +
                "      </tr>\n" +
                "    </tbody>\n" +
                "  </table>\n" +
                "  </div>\n" +
                "</div>");
            break;
        case "departmentManagement":
            $(this).attr("class","nav-link active");
            $(".mainArea").css("background-color","#905699");
            $(".mainArea").append("<div class=\"container\">\n" +
                "  <h2>基础表格</h2>\n" +
                "  <p>.table 类来设置基础表格的样式:</p>            \n" +
                "  <table class=\"table\">\n" +
                "    <thead>\n" +
                "      <tr>\n" +
                "        <th>Firstname</th>\n" +
                "        <th>Lastname</th>\n" +
                "        <th>Email</th>\n" +
                "      </tr>\n" +
                "    </thead>\n" +
                "    <tbody>\n" +
                "      <tr>\n" +
                "        <td>John</td>\n" +
                "        <td>Doe</td>\n" +
                "        <td>john@example.com</td>\n" +
                "      </tr>\n" +
                "      <tr>\n" +
                "        <td>Mary</td>\n" +
                "        <td>Moe</td>\n" +
                "        <td>mary@example.com</td>\n" +
                "      </tr>\n" +
                "      <tr>\n" +
                "        <td>July</td>\n" +
                "        <td>Dooley</td>\n" +
                "        <td>july@example.com</td>\n" +
                "      </tr>\n" +
                "    </tbody>\n" +
                "  </table>\n" +
                "</div>");
            break;
        case "afterSaleManagement":
            $(this).attr("class","nav-link active");
            $(".mainArea").css("background-color","#546464");
            break;

    }
}