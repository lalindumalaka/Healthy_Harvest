// JavaScript for the Site map
document.addEventListener('DOMContentLoaded', function() {
    const svgGroups = document.querySelectorAll('g[id^="groupId"]'); 

    svgGroups.forEach(group => {
        group.addEventListener('click', function() {
            const pageText = this.querySelector('text').textContent.trim(); 
            switch (pageText) {
                
                case 'HOME':
                    window.location.href = 'homepage.html'; 
                    break;
                case 'SHOP':
                    window.location.href = 'shop.html'; 
                    break;
                case 'GALLERY':
                    window.location.href = 'gallery page_lalindu.html'; 
                    break;
                case 'CONTENT PAGE':
                    window.location.href = 'content page_lalindu.html'; 
                    break;
                case 'FEEDBACK':
                    window.location.href = 'feedback.html'; 
                    break;
                case 'USER PROFILE':
                    window.location.href = 'User_profile.html'; 
                    break;
                case 'ABOUT US':
                    window.location.href = 'Team.html'; 
                    break;
                    case 'PAGE EDITOR DETAILS':
                        window.location.href = 'page editor_lalindu.html'; 
                        break; 
                
            }
        });
    });
});
