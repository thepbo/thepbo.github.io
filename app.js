

  document.addEventListener('click', function (event) {   

    const isToggle = event.target.closest('[data-bs-toggle="collapse"]');
    const isInside = event.target.closest('.collapse.show');

    if (isToggle) {
        const targetSelector = isToggle.getAttribute('href') || isToggle.getAttribute('data-bs-target');
        const targetEl = document.querySelector(targetSelector);

    document.querySelectorAll('.collapse.show').forEach((openEl) => {
        if(openEl !== targetEl) {
        const openInstance = bootstrap.Collapse.getInstance(openEl);
        if (openInstance) openInstance.hide();
        }
    });

    return;
}
if (isInside) return;

document.querySelectorAll('.collapse.show').forEach((collapseEl) => {
    const instance = bootstrap.Collapse.getInstance(collapseEl);
    if (instance) instance.hide();
});

});