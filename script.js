// المتغيرات العامة
let totalSum = 0;
const numbers = [];

// الحصول على العناصر من DOM
const numberInput = document.getElementById('numberInput');
const addButton = document.getElementById('addButton');
const sumDisplay = document.getElementById('sum');
const numbersList = document.getElementById('numbersList');
const resetButton = document.getElementById('resetButton');

// إضافة مستمع حدث للزر
addButton.addEventListener('click', addNumber);

// إضافة مستمع حدث للإدخال بالضغط على Enter
numberInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addNumber();
    }
});

// إضافة مستمع حدث لزر إعادة التعيين
resetButton.addEventListener('click', resetCalculator);

// دالة إضافة عدد جديد
function addNumber() {
    const inputValue = numberInput.value.trim();
    
    // التحقق مما إذا كان الإدخال فارغًا (للخروج)
    if (inputValue === '') {
        alert('تم إنهاء الإدخال. المجموع النهائي: ' + totalSum);
        return;
    }
    
    // التحقق من صحة الإدخال
    const number = parseFloat(inputValue);
    
    if (isNaN(number)) {
        alert('الرجاء إدخال رقم صحيح');
        return;
    }
    
    // إضافة العدد إلى المجموع
    totalSum += number;
    numbers.push(number);
    
    // تحديث عرض المجموع
    sumDisplay.textContent = totalSum;
    
    // إضافة العدد إلى القائمة
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.textContent = `العدد: ${number}`;
    
    const badge = document.createElement('span');
    badge.className = 'badge bg-primary rounded-pill';
    badge.textContent = `المجموع: ${totalSum}`;
    
    listItem.appendChild(badge);
    numbersList.appendChild(listItem);
    
    // مسح حقل الإدخال والتركيز عليه
    numberInput.value = '';
    numberInput.focus();
}

// دالة إعادة تعيين الحاسبة
function resetCalculator() {
    totalSum = 0;
    numbers.length = 0;
    sumDisplay.textContent = '0';
    numbersList.innerHTML = '';
    numberInput.value = '';
    numberInput.focus();
}