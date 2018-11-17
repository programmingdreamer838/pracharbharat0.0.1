<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{csrf_token()}}">
        <script> window.Laravel={  csrfToken:" {{ csrf_token() }}" }</script>

        <title>Pracharbharat</title>
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    {{-- jquery cdn and jquery color plugin --}}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/jquery.color-animation/1/mainfile"></script>
    {{-- ends  --}}

    {{-- jquery animation starts --}}
            <script src="/pracharbharat0.0.1/resources/js/jqueyanimation/imagesection.js"></script>
            <script src="/pracharbharat0.0.1/resources/js/jqueyanimation/onvisiblity.js"></script>

    {{-- jquery animation ends --}}

        <style>
            .overlay_transition{
                animation:changemarginright 1.9s  ease-in forwards;

            }
            @keyframes changemarginright{
                from{opacity:0.3}
                to{margin-right: 0px;opacity:0.9}
            }
            .overlay_transition_fadeout{
                animation: fadeout 8s linear forwards;
            }
            @keyframes fadeout{
                  from {opacity:1}
                  to{opacity: 0.5}
            }
        #app{
            position:relative;
            height:100vh;
        }

        body{
            overflow-x: hidden;
        }

        </style>

        <body>
            <div id="app">
                    <pbheader></pbheader>
                     <pbimage></pbimage>
            </div>
            <div  id="about" class="container-fluid">
                   <pbabout></pbabout>

            </div>
            <div id='pbproduct' class="container-fluid">
                 <pbproduct></pbproduct>
            </div>
            <div id="pbservices" class="container-fluid">
                <pbservice></pbservice>
            </div>
            <div id='pbcurproject' class="container-fluid">
                <pbongoingproject></pbongoingproject>
            </div>
            <div id='pbclients' class="container-fluid">

                <pbclient></pbclient>
            </div>
            <div id='pb_footer' class="tscontainer-fluid">

                 <pbfooter></pbfooter>
            </div>

        </body>

<script src="{{ asset('js/app.js') }}"></script>

