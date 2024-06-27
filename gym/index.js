document.querySelector('a[href="#packages"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#packages').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('a[href="#equipments"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#equipments').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('a[href="#diet"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#diet').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('a[href="#aboutus"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#aboutus').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('a[href="#blog"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#blog').scrollIntoView({ behavior: 'smooth' });
});


