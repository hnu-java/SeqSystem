/**
 * Created by DELL on 2017/12/14.
 */
/*
 * nowClick:最近一次点击
 * */
var nowClick;
var documentId=$("input#documentId").val();
$(document).on("click",".dic",function () {
    nowClick=$(this);
    var catalogIndex=$(nowClick).children("span.catalogIndex").text()
    $.ajax({
        url: "catalog-getCatalog",
        data: { documentId:documentId,catalogIndex:catalogIndex},
        dataType: "json",
        type: "Post",
        async: "false",
        success: function (result) {
            $("div.content").html(result.template);
            var catalog=result.catalogEntity,content="";
            if (catalog.first_index!="0")content+=catalog.first_index;
             if(catalog.second_index!="0")content+="."+catalog.second_index;
             if(catalog.third_index!="0")content+="."+catalog.third_index;
             if(catalog.fourth_index!="0")content+="."+catalog.fourth_index;
            content+="  "+catalog.title;
            $("h2#catalog_title").text(content);
            $("input#catalog-id").val(result.id_catalog);
        },
        error: function (result) {
            showtoast("dangerous","失败","获取失败")
        }
    })
})

function init() {
$("input#add_title").val("");
}

function templateInit() {
    $.ajax({
        url: "catalog-getIndex",
        data: {documentId:documentId},
        dataType: "json",
        type: "Post",
        async: "false",
        success: function (result) {
            $("div#allIndex").html("<div class='spiner-example'> <div class='sk-spinner sk-spinner-three-bounce'> <div class='sk-bounce1'></div> <div class='sk-bounce2'></div> <div class='sk-bounce3'></div> </div>");
            if(result.catalogList.length==0){
                $("div#allIndex").html("<div class='spiner-example'><li class='li_head black'> <button class='btn btn-primary  btn-xs'  data-toggle='modal' data-target='#myModal2'>新建目录</button> </li></div>");
            }
            else {
            var content=" ",nowFirst="0",nowSecond="0",nowThird="0",nowFourth="0",tempFirst,tempSecond,tempThird,tempFourth,tempCatalog;
            var firstEndContent,secondEndContent,thirdEndContent,fourthEndContent;
            firstEndContent="</li>";
            secondEndContent="</ul></li>";
            thirdEndContent="</ul></li>";
            fourthEndContent="</ul></li>";
            for (var i=0;i<result.catalogList.length;i++){
                tempCatalog=result.catalogList[i];
                tempFirst=tempCatalog.first_index;
                tempSecond=tempCatalog.second_index;
                tempThird=tempCatalog.third_index;
                tempFourth=tempCatalog.fourth_index;
                //结束符生成，如果下一条内容是子一级内容，不生成结束符；如果是同级内容，生成本级结束符；如果是更高级内容，要生成一次或多次结束符
                // 第一级目录内容生成（不含结束符）
                if(tempSecond=="0"&&tempThird=="0"&&tempFourth=="0"){
                    if (nowFirst=="0") {}//最开头不做任何操作
                    else if(nowSecond=="0"&&nowThird=="0"&&nowFourth=="0")//同级别
                    {
                        content+="</li>";}
                    else if(nowThird=="0"&&nowFourth=="0")//第二级:关第二级，关第一级（有多层）
                    {
                        content+="</li> </ul></li>";}
                    else if(nowFourth=="0")//上一节是第三级目录
                    {
                        content+="</li> </ul></li> </ul></li>";}
                    else{//上一节是第四级目录
                        content+="</li> </ul></li> </ul></li> </ul></li>";
                    }
                    content+=" <li>";
                    content+="  <a href='#' class='dic first'> <span class='nav-label'>"+tempFirst+"</span>";
                    content+=" <span class='catalogIndex' style='display: none'>"+tempFirst+" "+tempSecond+" "+tempThird+" "+tempFourth+"</span>"
                    content+="<span class='nav-label col-md-offset-1 indexName' >"+tempCatalog.title+"</span>";
                    content+="  <span class='fa arrow'></span> </a>";

                }
                // 第二级目录内容生成（不含结束符）
                else  if(tempThird=="0"&&tempFourth=="0"){
                    if(nowSecond=="0"&&nowThird=="0"&&nowFourth=="0")//上一节是第一级目录
                    {
                        content+="<ul  class='nav nav-second-level'>";
                    }
                    else if(nowThird=="0"&&nowFourth=="0")//上一节是第二级目录
                    {
                        content+="</li>";}
                    else if(nowFourth=="0")//上一节是第三级目录
                    {
                        content+="</li> </ul></li>"}
                    else{//上一节是第四级目录
                        content+="</li> </ul></li> </ul></li>";
                    }
                    content+=" <li> <a href='#' class='dic second'>";
                    content+=" <span class='nav-label'>"+tempSecond+"</span>";
                    content+=" <span class='catalogIndex' style='display: none'>"+tempFirst+" "+tempSecond+" "+tempThird+" "+tempFourth+"</span>"
                    content+="<span class='nav-label col-md-offset-1 indexName' >"+tempCatalog.title+"</span></a>";

                }
                // 第三级目录内容生成（不含结束符）
                else  if (tempFourth=="0"){
                    if(nowThird=="0"&&nowFourth=="0")//上一节是第二级目录
                    {
                        content+="<ul class='nav nav-third-level'>";
                    }
                    else if(nowFourth=="0")//上一节是第三级目录
                    {
                        content+="</li>";}
                    else{//上一节是第四级目录
                        content+="</li> </ul></li>";
                    }
                    content+=" <li> <a href='#' class='dic third'>";
                    content+=" <span class='nav-label'>"+tempThird+"</span>";
                    content+=" <span class='catalogIndex' style='display: none'>"+tempFirst+" "+tempSecond+" "+tempThird+" "+tempFourth+"</span>"
                    content+="<span class='nav-label col-md-offset-1 indexName' >"+tempCatalog.title+"</span></a>";

                }
                // 第四级目录内容生成（不含结束符）
                else {
                    if(nowFourth=="0")//上一节是第三级目录
                    {
                        content+="<ul class=' nav nav-fourth-level'>";
                    }
                    else{//上一节是第四级目录
                        content+="</li>";
                    }
                    content+=" <li> <a href='#' class='dic fourth'>";
                    content+=" <span class='nav-label'>"+tempFourth+"</span>";
                    content+=" <span class='catalogIndex' style='display: none'>"+tempFirst+" "+tempSecond+" "+tempThird+" "+tempFourth+"</span>"
                    content+="<span class='nav-label col-md-offset-1 indexName' >"+tempCatalog.title+"</span></a>";


                }
                nowFirst=tempFirst;nowSecond=tempSecond;nowThird=tempThird;nowFourth=tempFourth;
            }
            $("div#allIndex").html(content)
            $('#side-menu').metisMenu();}
        },
        error: function (result) {
            showtoast("dangerous","加载失败","加载目录失败")
        }
    })

}
//新增按钮
$(".li_add").click(function () {
   if(typeof(nowClick) == "undefined")
    {
        showtoast("warning","新增失败","没有选中任何目录","left");
    }
    if (!nowClick.hasClass("fourth")){
        init();
        $(".li_add_hidden").click();
    }
    else showtoast("warning","新增失败","只能新增四级目录");
})
//删除按钮
$(".li_delete").click(function () {
    if(typeof(nowClick) == "undefined")
    {
        showtoast("warning","删除失败","没有选中任何目录","left");
    }
    else{
        var name=$(nowClick).children("span.indexName").text();
        swal({
            title: "删除\""+name+"\"目录下所有内容",
            text: "一旦删除无法恢复，请谨慎操作！",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "删除",
            closeOnConfirm: false
        }, function () {
            catalogIndex=$(nowClick).children("span.catalogIndex").text()
            $.ajax({
                url: "catalog-delete",
                data: {catalogIndex:catalogIndex, documentId:documentId},
                dataType: "json",
                type: "Post",
                async: "false",
                success: function (result) {
                    $("button.cancel").click();
                    templateInit();
                    showtoast("success","成功","删除目录成功")
                },
                error: function (result) {
                    showtoast("dangerous","失败","删除目录失败")
                }
            })

        });
    }
})
//上移
$(".li_up").click(function () {
    //取上一个li
    var lastLi=nowClick.parent().prev("li")
    if ((typeof (lastLi).html())=="undefined")showtoast("warning","失败","已经到顶部")
    else {
        catalogIndex=$(nowClick).children("span.catalogIndex").text()
        $.ajax({
            url: "catalog-up",
            data: {catalogIndex:catalogIndex, documentId:documentId},
            dataType: "json",
            type: "Post",
            async: "false",
            success: function (result) {
                templateInit();
                showtoast("success","成功","上移目录成功")
            },
            error: function (result) {
                showtoast("dangerous","失败","上移目录失败")
            }
        })
    }
})

$(".li_down").click(function () {
    //取上一个li
    var nextLi=nowClick.parent().next("li")
    if ((typeof (nextLi).html())=="undefined")showtoast("warning","失败","已经到底部")
    else {
        catalogIndex=$(nowClick).children("span.catalogIndex").text()
        $.ajax({
            url: "catalog-down",
            data: {catalogIndex:catalogIndex, documentId:documentId},
            dataType: "json",
            type: "Post",
            async: "false",
            success: function (result) {
                templateInit();
                showtoast("success","成功","下移目录成功")
            },
            error: function (result) {
                showtoast("dangerous","失败","下移目录失败")
            }
        })
    }
})

/**目录生成*/
$(document).ready(function () {
    templateInit();
})

function getNextRank(nowRank) {
    if (nowRank=="first")return "second";
    else if(nowRank=="second") return"third";
    else if(nowRank=="third") return"fourth";
}

//新增按钮提交事件
function catalogAdd() {
    var title=$("input#add_title").val(),id_template=$("#add_id_template").val()
    var place=$("input[name='add_place']:checked").val(),catalogIndex=$(nowClick).children("span.catalogIndex").text();
    var temp=$(nowClick).attr("class");
    var classList=temp.split(' ');
    var nowRank=classList[1];

    if (place=="0"){//同级,传最后一个元素位置
        catalogIndex=$(nowClick).parent().parent().children("li:last-child").children("a").children("span.catalogIndex").text();
        $.ajax({
            url: "catalog-addState2",
            data: {title: title,id_template:id_template,catalogIndex:catalogIndex, id_document:documentId},
            dataType: "json",
            type: "Post",
            async: "false",
            success: function (result) {
                var lastNum,nextNum;
                lastNum=nowClick.parent().parent().children("li:last-child").children("a").children("span:first-child").text();
                nextNum=(parseInt(lastNum)+1);
                var content="<li> <a href='#' class='dic "+nowRank+"'> <span class='nav-label'>"+nextNum+"</span><span class='catalogIndex' style='display: none'>"+result.spanText+"</span><span class='nav-label col-md-offset-1 indexName'>"+title+"</span></a></li>";
                nowClick.parent().parent().append(content);
            },
            error: function (result) {
                showtoast("dangerous","加载失败","加载目录失败")
            }
        })
    }
    else if(place=="1") {//下一级别，需要新增ul，传当前级别位置
        var nextRank = getNextRank(nowRank), nowNum, nextNum;
        if (typeof(nowClick.parent().children("ul").html()) == "undefined") {//需要新增一个ul
            catalogIndex=nowClick.children("span.catalogIndex").text();
            $.ajax({
                url: "catalog-addState1",
                data: {title: title,id_template:id_template,catalogIndex:catalogIndex,id_document:documentId},
                dataType: "json",
                type: "Post",
                async: "false",
                success: function (result) {
                    nextNum = 1;
                    nowClick.parent().append(" <ul class='nav nav-" + nextRank + "-level'></ul>")
                    var content = "<li> <a href='#' class='dic " + nextRank + "'> <span class='nav-label'>" + nextNum + "</span><span class='catalogIndex' style='display: none'>"+result.spanText+"</span><span class='nav-label col-md-offset-1 indexName'>" + title + "</span></a></li>";
                    nowClick.parent().children("ul").append(content);
                    $('#side-menu').metisMenu();
                    $(nowClick).click();
                },
                error: function (result) {
                    showtoast("dangerous","加载失败","加载目录失败")
                }
            })
        }
        else {//不需要新增，传最后一个元素的位置
            catalogIndex=nowClick.parent().children("ul").children("li:last-child").children("a").children("span.catalogIndex").text();;
            $.ajax({
                url: "catalog-addState2",
                data: {title: title,id_template:id_template,catalogIndex:catalogIndex,id_document:documentId},
                dataType: "json",
                type: "Post",
                async: "false",
                success: function (result) {
                    nowNum = nowClick.parent().children("ul").children("li:last-child").children("a").children("span:first-child").text();
                    nextNum = (parseInt(nowNum) + 1);
                    var content = "<li> <a href='#' class='dic " + nextRank + "'> <span class='nav-label'>" + nextNum + "</span><span class='catalogIndex' style='display: none'>"+result.spanText+"</span><span class='nav-label col-md-offset-1 indexName'>" + title + "</span></a></li>";
                    nowClick.parent().children("ul").append(content);
                },
                error: function (result) {
                    showtoast("dangerous","加载失败","加载目录失败")
                }
            })


        }


    }
}

function catalogNew() {
    var title=$("input#new_title").val(),id_template=$("#new_id_template").val();
    $.ajax({
        url: "catalog-newCatalog",
        data: {title:title, id_document:documentId,id_template:id_template},
        dataType: "json",
        type: "Post",
        async: "false",
        success: function (result) {
            $("div#allIndex").html("<li> <a href='#' class='dic first'> <span class='nav-label'>1</span><span class='catalogIndex' style='display: none'>1 0 0 0</span><span class='nav-label col-md-offset-1 indexName'>"+title+"</span></a></li>")
            $('#side-menu').metisMenu();
            showtoast("success","成功","新增目录成功")
        },
        error: function (result) {
            showtoast("dangerous","失败","新增目录失败")
        }
    })
    
}

function commitDis() {
    alert($(".click2edit.discuss").html());
    
}


