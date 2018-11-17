<template>
    <nav class="navbar navbar-default" id="pbheader">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Pracharbharat</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Home</a></li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">About us <span class="caret"></span></a>
                        <ul class="dropdown-menu col-xs-12">
                            <li><a href="#">Our services</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">News and events</a></li>
                        </ul>
                    </li>
                    <li><a href="abc.come">vision</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Dwonloads</a></li>
                </ul>

            </div>
        </div>
    </nav>
</template>
<style scoped>
    #pbheader {
        height: 14vh;
        padding: 1vh;
        background-image:linear-gradient(to right,#efefbb, #d4d3dd);
        z-index:2000;
        opacity: 0.9;
        border-bottom: 2px black solid;
        position:relative;

    }
 #myNavbar ul li a{
        font-weight: bold;
        font-size: 16px;
        font-family: cursive;
        color:black;
        border-radius:2px;

    }
 #myNavbar ul li a:hover{
       color:orangered;

    }
.dropdown-menu{
    background-image:linear-gradient(to bottom,#efefbb, #d4d3dd)


}
.dropdown-menu li a:hover{
    background:black;
    opacity:1;

}
</style>
<script>

</script>
