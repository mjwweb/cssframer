export const RAD = Math.PI / 180;
export const DEG = 180 / Math.PI;

export const snapToGrid = (value, snap) => {
    if (snap === 0) {
        return value;
    } else {
        const result = snapCandidate(value, snap);

        if (result - value < snap) {
            return result;
        }
    }
};

export const snapCandidate = (value, gridSize) => {
    if (gridSize === 0) return value;
    return Math.round(value / gridSize) * gridSize;
};

export const floatToFixed = (val, size = 6) => {
    return Number(val.toFixed(size));
};