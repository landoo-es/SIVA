<?php

if(!isset($_SERVER['HTTP_X_PJAX'])){

    $content = basename($_SERVER['SCRIPT_NAME']);

    $_SERVER['HTTP_X_PJAX'] = true;
    include 'stilearn.base.template.php';
    die();
}

?>
                    <!-- NAV & NAVBAR
                    ================================================== -->
                    <!-- NAVBAR -->
                    <div id="panel-navbar" class="panel panel-default">
                        <div class="panel-heading bg-white">
                            <div class="panel-actions">
                                <button data-refresh="#panel-navbar" title="refresh" class="btn-panel">
                                    <i class="fa fa-refresh"></i>
                                </button>
                                <button data-expand="#panel-navbar" title="expand" class="btn-panel">
                                    <i class="fa fa-expand"></i>
                                </button>
                                <button data-collapse="#panel-navbar" title="collapse" class="btn-panel">
                                    <i class="fa fa-caret-down"></i>
                                </button>
                            </div><!-- /panel-actions -->
                            <h3 class="panel-title">Navbar</h3>
                        </div><!-- /panel-heading -->

                        <div class="panel-body">
                            <p class="text-muted"><strong>Navbar Default</strong></p>
                            <p>Navbars are responsive meta components that serve as navigation headers for your application or site. They begin collapsed (and are toggleable) in mobile views and become horizontal as the available viewport width increases. More detail about the <a rel="tooltip" title="Bootstrap navbar" target="_blank" href="http://getbootstrap.com/components/#navbar">Navbar</a>.</p>
                            <br>
                            <nav class="navbar navbar-default" role="navigation">
                                <!-- Brand and toggle get grouped for better mobile display -->
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                    <a class="navbar-brand" href="#">Stilearn</a>
                                </div><!--/navbar-header-->

                                <!-- Collect the nav links, forms, and other content for toggling -->
                                <div class="collapse navbar-collapse" id="navbar-collapse-1">
                                    <ul class="nav navbar-nav">
                                        <li class="active"><a href="#">Link</a></li>
                                        <li class="dropdown">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                                            <ul class="dropdown-menu animated fadeInDown" role="menu">
                                                <li><a href="#">Action</a></li>
                                                <li><a href="#">Another action</a></li>
                                                <li><a href="#">Something else here</a></li>
                                                <li class="divider"></li>
                                                <li><a href="#">Separated link</a></li>
                                                <li class="divider"></li>
                                                <li><a href="#">One more separated link</a></li>
                                            </ul>
                                        </li>
                                    </ul><!--/navbar-nav-->

                                    <form class="navbar-form navbar-left" role="search">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Search">
                                        </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </form><!--/navbar-form-->

                                    <ul class="nav navbar-nav navbar-right">
                                        <li class="dropdown">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                                            <ul class="dropdown-menu animated fadeInDown" role="menu">
                                                <li><a href="#">Action</a></li>
                                                <li><a href="#">Another action</a></li>
                                                <li><a href="#">Something else here</a></li>
                                                <li class="divider"></li>
                                                <li><a href="#">Separated link</a></li>
                                            </ul>
                                        </li>
                                    </ul><!--/navbar-nav right-->
                                </div><!-- /.navbar-collapse -->
                            </nav><!--/navbar-->
                            <br>


                            <p class="text-muted"><strong>Navbar inverse</strong></p>
                            <p>Modify the look of the navbar by adding <code>.navbar-inverse</code></p>
                            <br>
                            <nav class="navbar navbar-inverse" role="navigation">
                                <!-- Brand and toggle get grouped for better mobile display -->
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-2">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                    <a class="navbar-brand" href="#">Stilearn</a>
                                </div><!--/navbar-header-->

                                <!-- Collect the nav links, forms, and other content for toggling -->
                                <div class="collapse navbar-collapse" id="navbar-collapse-2">
                                    <ul class="nav navbar-nav">
                                        <li class="active"><a href="#">Link</a></li>
                                        <li class="dropdown">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                                            <ul class="dropdown-menu animated fadeInDown" role="menu">
                                                <li><a href="#">Action</a></li>
                                                <li><a href="#">Another action</a></li>
                                                <li><a href="#">Something else here</a></li>
                                                <li class="divider"></li>
                                                <li><a href="#">Separated link</a></li>
                                                <li class="divider"></li>
                                                <li><a href="#">One more separated link</a></li>
                                            </ul>
                                        </li>
                                    </ul><!--/navbar-nav-->

                                    <form class="navbar-form navbar-left" role="search">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Search">
                                        </div>
                                        <button type="submit" class="btn btn-danger">Submit</button>
                                    </form><!--/navbar-form-->

                                    <ul class="nav navbar-nav navbar-right">
                                        <li class="dropdown">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                                            <ul class="dropdown-menu animated fadeInDown" role="menu">
                                                <li><a href="#">Action</a></li>
                                                <li><a href="#">Another action</a></li>
                                                <li><a href="#">Something else here</a></li>
                                                <li class="divider"></li>
                                                <li><a href="#">Separated link</a></li>
                                            </ul>
                                        </li>
                                    </ul><!--/navbar-nav right-->
                                </div><!-- /.navbar-collapse -->
                            </nav><!--/navbar-->
                        </div><!-- /panel-body -->
                    </div><!-- /panel-navbar -->




                    <!-- NAV -->
                    <div id="panel-navs" class="panel panel-default">
                        <div class="panel-heading bg-white">
                            <div class="panel-actions">
                                <button data-refresh="#panel-navs" title="refresh" class="btn-panel">
                                    <i class="fa fa-refresh"></i>
                                </button>
                                <button data-expand="#panel-navs" title="expand" class="btn-panel">
                                    <i class="fa fa-expand"></i>
                                </button>
                                <button data-collapse="#panel-navs" title="collapse" class="btn-panel">
                                    <i class="fa fa-caret-down"></i>
                                </button>
                            </div><!-- /panel-actions -->
                            <h3 class="panel-title">Navs</h3>
                        </div><!-- /panel-heading -->

                        <div class="panel-body">
                            <p>Starting with the base <code>.nav</code> class, as well as shared states. Swap modifier classes to switch between each style.</p>

                            <h4>Tabs</h4>
                            <p>Note the <code>.nav-tabs</code> class requires the <code>.nav</code> base class.</p><br>
                            <ul class="nav nav-tabs">
                                <li class="active"><a href="#">Home</a></li>
                                <li><a href="#">Profile</a></li>
                                <li class="dropdown">
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                        Dropdown <i class="fa fa-angle-down"></i>
                                    </a>
                                    <ul class="dropdown-menu animated flipInX" role="menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li class="divider"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <br>
                            <pre class="prettyprint no-padding">&lt;ul class=&quot;nav nav-tabs&quot;&gt;
    &lt;li class=&quot;active&quot;&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Profile&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;dropdown&quot;&gt;
        &lt;a class=&quot;dropdown-toggle&quot; data-toggle=&quot;dropdown&quot; href=&quot;#&quot;&gt;
            Dropdown &lt;span class=&quot;caret&quot;&gt;&lt;/span&gt;
        &lt;/a&gt;
        &lt;ul class=&quot;dropdown-menu&quot;&gt;
            ...
        &lt;/ul&gt;
    &lt;/li&gt;
&lt;/ul&gt;</pre><br>

                        
                            <h4>Pills</h4>
                            <p>Take that same HTML, but use <code>.nav-pills</code> instead:</p><br>
                            <ul class="nav nav-pills">
                                <li class="active"><a href="#">Home</a></li>
                                <li><a href="#">Profile</a></li>
                                <li class="dropdown">
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                        Dropdown <i class="fa fa-angle-down"></i>
                                    </a>
                                    <ul class="dropdown-menu animated flipInX" role="menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li class="divider"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <br>
                            <pre class="prettyprint no-padding">&lt;ul class=&quot;nav nav-pills&quot;&gt;
    &lt;li class=&quot;active&quot;&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Profile&lt;/a&gt;&lt;/li&gt;
    &lt;li class=&quot;dropdown&quot;&gt;
        &lt;a class=&quot;dropdown-toggle&quot; data-toggle=&quot;dropdown&quot; href=&quot;#&quot;&gt;
            Dropdown &lt;span class=&quot;caret&quot;&gt;&lt;/span&gt;
        &lt;/a&gt;
        &lt;ul class=&quot;dropdown-menu&quot;&gt;
            ...
        &lt;/ul&gt;
    &lt;/li&gt;
&lt;/ul&gt;</pre><br>
                            <p>Pills are also vertically stackable. Just add <code>.nav-stacked</code>.</p>
                            <ul class="nav nav-pills nav-stacked" style="max-width: 300px;">
                                <li class="active"><a href="#">Home</a></li>
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Messages</a></li>
                            </ul>
                            <br>
                            <pre class="prettyprint no-padding">&lt;ul class=&quot;nav nav-pills nav-stacked&quot;&gt;
    ...
&lt;/ul&gt;</pre><br>
                        
                            <h4>Justified</h4>
                            <p>Easily make tabs or pills equal widths of their parent at screens wider than 768px with <code>.nav-justified</code>. On smaller screens, the nav links are stacked.</p>
                            <div class="callout callout-warning">
                                <h4>Safari and responsive justified navs</h4>
                                <p>Safari exhibits a bug in which resizing your browser horizontally causes rendering errors in the justified nav that are cleared upon refreshing. This bug is also shown in the <a rel="tooltip" title="Refer to BS example" target="_blank" href="http://getbootstrap.com/examples/justified-nav/">justified nav example</a>.</p>
                            </div>
                            <br>
                            <ul class="nav nav-tabs nav-justified">
                                <li class="active"><a href="#">Home</a></li>
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Messages</a></li>
                            </ul>
                            <br>
                            <ul class="nav nav-pills nav-justified">
                                <li class="active"><a href="#">Home</a></li>
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Messages</a></li>
                            </ul>
                        </div><!-- /panel-body -->
                    </div><!-- /panel-navs -->





                    <!-- LIST GROUP -->
                    <div id="panel-listgroup" class="panel panel-default">
                        <div class="panel-heading bg-white">
                            <div class="panel-actions">
                                <button data-refresh="#panel-listgroup" title="refresh" class="btn-panel">
                                    <i class="fa fa-refresh"></i>
                                </button>
                                <button data-expand="#panel-listgroup" title="expand" class="btn-panel">
                                    <i class="fa fa-expand"></i>
                                </button>
                                <button data-collapse="#panel-listgroup" title="collapse" class="btn-panel">
                                    <i class="fa fa-caret-down"></i>
                                </button>
                            </div><!-- /panel-actions -->
                            <h3 class="panel-title">List Group</h3>
                        </div><!-- /panel-heading -->

                        <div class="panel-body">
                            <p class="lead">List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.</p>
                            <p>The most basic list group is simply an unordered list with list items, and the proper classes. Build upon it with the options that follow, or your own CSS 
                            <p>Add the badges component to any list group item and it will automatically be positioned on the right.</p>
                            <ul class="list-group" data-toggle="sortable-list" style="max-width: 320px;">
                                <li class="list-group-item sortable-list-item"><span class="sortable-list-handle badge">14</span>Hover on Badge and drag it</li>
                                <li class="list-group-item sortable-list-item"><span class="sortable-list-handle badge badge-primary">8</span>Dapibus ac facilisis in</li>
                                <li class="list-group-item sortable-list-item"><span class="sortable-list-handle badge badge-success">32</span>Morbi leo risus</li>
                                <li class="list-group-item sortable-list-item"><span class="sortable-list-handle badge badge-info">2</span>Porta ac consectetur ac</li>
                                <li class="list-group-item sortable-list-item"><span class="sortable-list-handle badge badge-warning">9</span>Vestibulum at eros</li>
                                <li class="list-group-item sortable-list-item"><span class="sortable-list-handle badge badge-danger">11</span>Consectetur adipisicing</li>
                            </ul>
                            <p><strong>NOTE: </strong> Adding sortable support via attribute <code>data-toggle="sortable-list"</code>. Refer to the demo to see this in action.</p>
                            <pre class="prettyprint no-padding">&lt;ul class=&quot;list-group&quot;&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;
        &lt;span class=&quot;badge&quot;&gt;14&lt;/span&gt;
        Cras justo odio
    &lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;
        &lt;span class=&quot;badge badge-primary&quot;&gt;8&lt;/span&gt;
        Dapibus ac facilisis in
    &lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;
        &lt;span class=&quot;badge badge-success&quot;&gt;32&lt;/span&gt;
        Morbi leo risus
    &lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;
        &lt;span class=&quot;badge badge-info&quot;&gt;2&lt;/span&gt;
        Porta ac consectetur ac
    &lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;
        &lt;span class=&quot;badge badge-warning&quot;&gt;9&lt;/span&gt;
        Vestibulum at eros
    &lt;/li&gt;
    &lt;li class=&quot;list-group-item&quot;&gt;
        &lt;span class=&quot;badge badge-danger&quot;&gt;11&lt;/span&gt;
        Consectetur adipisicing
    &lt;/li&gt;
&lt;/ul&gt;</pre><br>


                            <h4>Linked items</h4>
                            <p>Linkify list group items by using anchor tags instead of list items (that also means a parent <code>&lt;div&gt;</code> instead of an <code>&lt;ul&gt;</code>). No need for individual parents around each element.</p>
                            <div class="list-group" style="max-width: 320px;">
                                <a href="#" class="list-group-item"><span class="badge">14</span>Cras justo odio</a>
                                <a href="#" class="list-group-item"><span class="badge badge-primary">8</span>Dapibus ac facilisis in</a>
                                <a href="#" class="list-group-item"><span class="badge badge-success">32</span>Morbi leo risus</a>
                                <a href="#" class="list-group-item active"><span class="badge badge-info">2</span>Porta ac consectetur ac</a>
                                <a href="#" class="list-group-item"><span class="badge badge-warning">9</span>Vestibulum at eros</a>
                                <a href="#" class="list-group-item"><span class="badge badge-danger">11</span>Consectetur adipisicing</a>
                            </div>
                            <pre class="prettyprint no-padding">&lt;div class=&quot;list-group&quot;&gt;
    &lt;a href=&quot;#&quot; class=&quot;list-group-item&quot;&gt;
        &lt;span class=&quot;badge&quot;&gt;14&lt;/span&gt;
        Cras justo odio
    &lt;/a&gt;
    &lt;a href=&quot;#&quot; class=&quot;list-group-item&quot;&gt;
        &lt;span class=&quot;badge badge-primary&quot;&gt;8&lt;/span&gt;
        Dapibus ac facilisis in
    &lt;/a&gt;
    &lt;a href=&quot;#&quot; class=&quot;list-group-item active&quot;&gt;
        &lt;span class=&quot;badge badge-success&quot;&gt;32&lt;/span&gt;
        Morbi leo risus
    &lt;/a&gt;
    &lt;a href=&quot;#&quot; class=&quot;list-group-item&quot;&gt;
        &lt;span class=&quot;badge badge-info&quot;&gt;2&lt;/span&gt;
        Porta ac consectetur ac
    &lt;/a&gt;
    &lt;a href=&quot;#&quot; class=&quot;list-group-item&quot;&gt;
        &lt;span class=&quot;badge badge-warning&quot;&gt;9&lt;/span&gt;
        Vestibulum at eros
    &lt;/a&gt;
    &lt;a href=&quot;#&quot; class=&quot;list-group-item&quot;&gt;
        &lt;span class=&quot;badge badge-danger&quot;&gt;11&lt;/span&gt;
        Consectetur adipisicing
    &lt;/a&gt;
&lt;/div&gt;</pre><br>

                            
                            <h4>Simple custom content</h4>
                            <div class="list-group">
                                <a href="#" class="list-group-item active">
                                    <h4 class="list-group-item-heading">List group item heading</h4>
                                    <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                </a>
                                <a href="#" class="list-group-item">
                                    <h4 class="list-group-item-heading">List group item heading</h4>
                                    <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                </a>
                                <a href="#" class="list-group-item">
                                    <h4 class="list-group-item-heading">List group item heading</h4>
                                    <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                </a>
                            </div>
                            <pre class="prettyprint no-padding">&lt;div class=&quot;list-group&quot;&gt;
    &lt;a href=&quot;#&quot; class=&quot;list-group-item active&quot;&gt;
        &lt;h4 class=&quot;list-group-item-heading&quot;&gt;List group item heading&lt;/h4&gt;
        &lt;p class=&quot;list-group-item-text&quot;&gt;...&lt;/p&gt;
    &lt;/a&gt;
&lt;/div&gt;</pre>
                        </div><!-- /panel-body -->
                    </div><!-- /panel-listgroup -->