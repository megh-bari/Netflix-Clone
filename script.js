document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-box');

    faqItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const toggleId = item.getAttribute('data-toggle-id');
            const answer = document.getElementById(toggleId);
            const svgIcon = item.querySelector('.toggle-icon');

            // Toggle the visibility of the answer
            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
                svgIcon.classList.remove('cross'); // Adjust the icon state
            } else {
                // Hide all other answers before showing this one
                faqItems.forEach(function(otherItem) {
                    const otherToggleId = otherItem.getAttribute('data-toggle-id');
                    if (otherToggleId !== toggleId) {
                        const otherAnswer = document.getElementById(otherToggleId);
                        otherAnswer.classList.remove('show');
                    }
                });

                answer.classList.add('show');
                svgIcon.classList.add('cross'); // Adjust the icon state
            }
        });
    });
});
