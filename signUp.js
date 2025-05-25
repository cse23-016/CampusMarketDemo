const checkbox = document.getElementById('hasBusiness');
    const businessSection = document.getElementById('businessDetails');

    checkbox.addEventListener('change', () => {
      businessSection.classList.toggle('hidden', !checkbox.checked);
    });