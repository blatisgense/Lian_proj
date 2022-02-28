'use strict';
let
    _mainElement = document.querySelector('.home_header_slider'),
    _sliderWrapper = _mainElement.querySelector('.home_header_slider_inner'), // обертка для .slider-item
    _sliderItems = _mainElement.querySelectorAll('.home_header_slider_inner_slide'), // элементы (.slider-item)
    _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
    _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента
    _positionLeftItem = 0, // позиция левого активного элемента
    _transform = 0, // значение транфсофрмации .slider_wrapper
    _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
    _items = []; // массив элементов
// наполнение массива _items
_sliderItems.forEach(function (item, index) {
    _items.push({item: item, position: index, transform: 0});
});

let position = {
    getItemMin: function () {
        let indexItem = 0;
        _items.forEach(function (item, index) {
            if (item.position < _items[indexItem].position) {
                indexItem = index;
            }
        });
        return indexItem;
    },
    getItemMax: function () {
        let indexItem = 0;
        _items.forEach(function (item, index) {
            if (item.position > _items[indexItem].position) {
                indexItem = index;
            }
        });
        return indexItem;
    },
    getMin: function () {
        return _items[position.getItemMin()].position;
    },
    getMax: function () {
        return _items[position.getItemMax()].position;
    }
};

let _transformItem = function (direction) {
    let nextItem;
    if (direction === 'right') {
        _positionLeftItem++;
        if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
            nextItem = position.getItemMin();
            _items[nextItem].position = position.getMax() + 1;
            _items[nextItem].transform += _items.length * 100;
            _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
        }
        _transform -= _step;
    }
    if (direction === 'left') {
        _positionLeftItem--;
        if (_positionLeftItem < position.getMin()) {
            nextItem = position.getItemMax();
            _items[nextItem].position = position.getMin() - 1;
            _items[nextItem].transform -= _items.length * 100;
            _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
        }
        _transform += _step;
    }
    _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
};

function setUpListenerRight() {
    function kakadu() {
        _transformItem('right');
    }

    kakadu();
}

function setUpListenerLeft() {
    function kakadu() {
        _transformItem('left');
    }

    kakadu();
}