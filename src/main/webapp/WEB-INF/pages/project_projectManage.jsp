<%--
  Created by IntelliJ IDEA.
  User: zhiweixu
  Date: 11/12/2017
  Time: 21:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!-- Mirrored from www.zi-han.net/theme/hplus/ by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 20 Jan 2016 14:16:41 GMT -->
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="renderer" content="webkit">
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <title>项目管理</title>
    <!--[if lt IE 9]>
    <meta http-equiv="refresh" content="0;ie.html" />
    <![endif]-->

    <link rel="shortcut icon" href="../example/favicon.ico">
    <link href="../css/bootstrap.min14ed.css?v=3.3.6" rel="stylesheet">
    <link href="../css/font-awesome.min93e3.css?v=4.4.0" rel="stylesheet">
    <link href="../css/animate.min.css" rel="stylesheet">
    <link href="../css/style.min862f.css?v=4.1.0" rel="stylesheet">
    <link href="../css/z_style.css" rel="stylesheet">
</head>

<body class="fixed-sidebar full-height-layout gray-bg" style="overflow:hidden">
<div class="animated fadeInDown">

    <div id="page-wrapper" class="dashbard-1">
        <div class="white-bg row border-bottom">
            <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
                <div class="navbar-header"><a  href="#"><img src="../img/logo.png" style="height: 50px;margin: 10px 0px 5px 50px;"> </a>
                </div>

                <ul class="nav navbar-top-links navbar-right">
                    <a class="dropdown J_tabClose" data-toggle="dropdown">王二狗<span class="caret"></span>

                    </a>
                    <ul role="menu" class="dropdown-menu dropdown-menu-right">
                        <li class="J_tabShowActive"><a>修改个人信息</a>
                        </li>
                        <li class="divider"></li>
                        <li class="J_tabShowActive"><a>系统管理</a>
                        </li>
                        <li class="divider"></li>
                        <li class="J_tabShowActive"><a>机构管理</a>
                        </li>
                        <li class="divider"></li>
                        <li class="J_tabCloseAll"><a href="../example/login.html">安全退出</a>
                        </li>
                    </ul>

                    <li class="dropdown hidden-xs">
                        <a class="right-sidebar-toggle" aria-expanded="false" href="../example/login.html">
                            <img src="../img/退出.png">
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        <div >
            <div class="form-group col-sm-1" style="margin-left: 30px; margin-top: 100px">
                <button type="button" class="btn btn-w-m btn-success">成员邀请</button>
                <button type="button" class="btn btn-w-m btn-success" style="margin-top: 30px">组长转移</button>
                <button type="button" class="btn btn-w-m btn-success" style="margin-top: 30px">任命副组长</button>
            </div>
            <div class="form-group col-sm-10">
                <label class="col-md-offset-1 col-sm-10 control-label zFont2"style="margin-top: 50px">组员管理</label>
                <label class="col-md-offset-1 col-sm-10 control-label zFont2"style="margin-top: 15px">当前组员</label>
                <div class="col-md-offset-1 col-md-6">
                    <table class="table" style="border-left: none;border-right: none">
                        <thead>
                        <tr>
                            <th class="col-sm-2">姓名</th>
                            <th class="col-sm-2">职位</th>
                            <th class="col-sm-2">邮箱</th>
                            <th class="col-sm-2">电话</th>
                            <th class="col-sm-1"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td >QQ小冰</td>
                            <td>组长</td>
                            <td>123@qq.com</td>
                            <td>15236456987</td>
                            <td>
                                <button type="button" class="btn btn-xs btn-danger">移除</button>
                            </td>
                        </tr>
                        <tr>
                            <td >QQ大冰</td>
                            <td>副组长</td>
                            <td>123@qq.com</td>
                            <td>15236456987</td>
                            <td>
                                <button type="button" class="btn btn-xs btn-danger">移除</button>
                            </td>
                        </tr>
                        <tr>
                            <td >QQ中冰</td>
                            <td>组员</td>
                            <td>123@qq.com</td>
                            <td>15236456987</td>
                            <td>
                                <button type="button" class="btn btn-xs btn-danger">移除</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <label class="col-md-offset-1 col-sm-10 control-label zFont2"style="margin-top: 15px">发出的邀请</label>
                <div class="col-md-offset-1 col-md-6">
                    <table class="table">
                        <thead>
                        <tr>
                            <th class="col-sm-2">姓名</th>
                            <th class="col-sm-2">申请时间</th>
                            <th class="col-sm-2">状态</th>
                            <th class="col-sm-2">备注</th>
                            <th class="col-sm-1"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td >芍药</td>
                            <td>2017-7-8 12:36</td>
                            <td>等待</td>
                            <td>无</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td >桔梗</td>
                            <td>2017-7-8 12:36</td>
                            <td>接受</td>
                            <td>无</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td >菱</td>
                            <td>2017-7-8 12:36</td>
                            <td>拒绝</td>
                            <td>无</td>
                            <td>
                                <button type="button" class="btn btn-primary btn-xs" >重发</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!--右侧部分结束-->
</div>
<script src="../js/jquery.min.js?v=2.1.4"></script>
<script src="../js/bootstrap.min.js?v=3.3.6"></script>
<script src="../js/plugins/metisMenu/jquery.metisMenu.js"></script>
<script src="../js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
<script src="../js/plugins/layer/layer.min.js"></script>
<script src="../js/hplus.min.js?v=4.1.0"></script>
<script type="text/javascript" src="../js/contabs.min.js"></script>
<script src="../js/plugins/pace/pace.min.js"></script>
</body>


<!-- Mirrored from www.zi-han.net/theme/hplus/ by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 20 Jan 2016 14:17:11 GMT -->
</html>
