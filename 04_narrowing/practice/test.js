function safeGet(array, index) {
    if (index >= 0 && index >= array.length)
        return;
    return array[index];
}
