function checkEQuality ($surfaceValue1, $surfaceValue2) {
    console.log("Checking if " + $surfaceValue1 + " is equal to " + $surfaceValue2);
    if ($surfaceValue1.getLex() != $surfaceValue2.getLex()) {
        return false;
    }
    return true;
}