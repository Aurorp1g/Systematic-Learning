// 粒子背景配置
(function() {
    function initParticles() {
        console.log('Initializing particles...');
        
        if (typeof particlesJS !== 'function') {
            console.log('particlesJS not loaded');
            return;
        }
        
        var container = document.getElementById('particles-js');
        if (!container) {
            container = document.createElement('div');
            container.id = 'particles-js';
            
            var target = document.body || document.documentElement;
            if (target.firstChild) {
                target.insertBefore(container, target.firstChild);
            } else {
                target.appendChild(container);
            }
            console.log('Created container');
        }
        
        container.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;pointer-events:none;background:transparent;';
        
        try {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: '#ffffff' },
                    shape: { type: 'circle' },
                    opacity: { value: 0.1, random: true },
                    size: { value: 3, random: true },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#00ffff',
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: { enable: true, mode: 'grab' },
                        onclick: { enable: true, mode: 'push' },
                        resize: true
                    },
                    modes: {
                        grab: { distance: 140, line_linked: { opacity: 0.5 } },
                        push: { particles_nb: 4 }
                    }
                },
                retina_detect: true
            });
            console.log('Particles initialized successfully');
        } catch(e) {
            console.error('Particles error:', e);
        }
    }
    
    function checkAndInit() {
        if (typeof particlesJS === 'function') {
            initParticles();
        } else {
            setTimeout(checkAndInit, 100);
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkAndInit);
    } else {
        checkAndInit();
    }
})();