import { normalize, schema } from 'normalizr';

const courses = new schema.Entity("courses");


export default function courseNormalizer(data) {
    return normalize(data, [courses]);
};