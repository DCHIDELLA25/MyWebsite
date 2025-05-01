document.addEventListener('DOMContentLoaded', () => {
    // Add starfield animation
    function createStarfield() {
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.pointerEvents = 'none';
        container.style.zIndex = '-1';

        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.width = Math.random() * 3 + 'px';
            star.style.height = star.style.width;
            star.style.backgroundColor = '#fff';
            star.style.borderRadius = '50%';
            star.style.opacity = Math.random();
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            
            // Add twinkle animation
            star.style.animation = `twinkle ${2 + Math.random() * 3}s infinite`;
            container.appendChild(star);
        }

        document.body.appendChild(container);
    }

    // CSS for twinkle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0%, 100% { opacity: ${Math.random()}; }
            50% { opacity: ${Math.random()}; }
        }
    `;
    document.head.appendChild(style);

    createStarfield();

    // Existing tab functionality
    const tabLinks = document.querySelectorAll('.tab-link');
    // ... (keep previous tab functionality)
});