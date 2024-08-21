document.getElementById('linksBtn').addEventListener('click', function() {
    document.getElementById('links').classList.remove('hidden');
    document.getElementById('shop').classList.add('hidden');
    this.classList.add('active');
    document.getElementById('shopBtn').classList.remove('active');
});

document.getElementById('shopBtn').addEventListener('click', function() {
    document.getElementById('shop').classList.remove('hidden');
    document.getElementById('links').classList.add('hidden');
    this.classList.add('active');
    document.getElementById('linksBtn').classList.remove('active');
});
