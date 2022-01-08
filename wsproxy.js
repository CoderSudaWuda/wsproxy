    window.WebSocket = new Proxy(window.WebSocket, {
        construct(Target, args) {
            args[0] = window._server || args[0];
            window._server = args[0];
            window._region = args[0].split('lobby')[1].split('hiss')[0];
            
            alert('test: is working!')

            return Reflect.construct(Target, args);
        }
    });
