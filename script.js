//Ekran scroll yapıldığında navbar'ın arkaplan renginin değişmesi için.
window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = "#355592";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
};

//Our classes sınıfındaki butonların aktifleştirilmesi için. 
function showImage(classType) {
    const imageElement = document.getElementById('current-image');
    switch (classType) {
        case 'yoga':
            imageElement.src = 'images/yoga.jpg';
            imageElement.alt = 'Yoga Class';
            break;
        case 'group':
            imageElement.src = 'images/group.webp';
            imageElement.alt = 'Group Class';
            break;
        case 'solo':
            imageElement.src = 'images/solo.jpg';
            imageElement.alt = 'Solo Class';
            break;
        case 'stretching':
            imageElement.src = 'images/stret.webp';
            imageElement.alt = 'Stretching Class';
            break;
        default:
            imageElement.src = '';
            break;
    }
};

//Our Classes aktif butonunun renginin sabit kalmasını sağlamak için.

const classButtons = document.querySelectorAll('.btn-class');

classButtons.forEach(button => {
    button.addEventListener('click', function() {
        //Aktif sınıfı kaldır ve yeni tıklanan butona ekle.
        classButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

//BMI hesaplaması sonucu oku hareket ettirmek için.
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');

function calculateBMI() {
    const height = heightInput.value;
    const weight = weightInput.value;

    if(height > 0 && weight > 0) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

        //BMI sonucu gösteriliyor.
        const resultElement = document.getElementById('bmi-result');
        document.getElementById('bmi-value').textContent = bmi;
        resultElement.classList.remove('hidden');
        resultElement.style.display = 'block';

        //Okun BMI değerine göre hareket etmesi
        const arrowElement = document.getElementById('bmi-arrow');
        if (bmi < 18.5) {
            arrowElement.style.transform = 'translateX(-250px)';
        } else if (bmi >= 18.5 && bmi < 24.99) {
            arrowElement.style.transform = 'translateX(-125px)';
        } else if (bmi >= 25 && bmi < 29.99) {
            arrowElement.style.transform = 'translateX(0px)';
        } else if (bmi >= 30 && bmi < 34.99) {
            arrowElement.style.transform = 'translateX(+125px)';
        } else {
            arrowElement.style.transform = 'translate(+250px)';
        }
    }
}

//Kullanıcı height-weight inputunu değiştirdiğinde BMI hesaplama fonksiyonunu çağırıyoruz.
heightInput.addEventListener('input', calculateBMI);
weightInput.addEventListener('input', calculateBMI);

//Hamburger Menü.
const hamburger = document.querySelector('.nav-hamburger');
const hamburgerMenu = document.querySelector('.nav-hamburger-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Hamburger simgesi için
    hamburgerMenu.classList.toggle('active'); // Menü açılıp kapanması için
});


