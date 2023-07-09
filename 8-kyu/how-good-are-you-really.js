const betterThanAverage = (classPoints, yourPoints) => {
    return yourPoints > (classPoints.reduce((sum, current) => sum + current, 0) + yourPoints) / (classPoints.length + 1)? true
        : false
}