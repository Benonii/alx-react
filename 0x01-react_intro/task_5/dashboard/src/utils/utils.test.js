import { getFullYear, getFooterCopy, getLatestNotification } from "./utils.js"

test('Gets the current year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
});

test('Gets the correct string with true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
})

test('Gets the correct sting "<string>...</string>"', () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
})