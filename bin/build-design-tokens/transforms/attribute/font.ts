import * as StyleDictionary from 'style-dictionary';

StyleDictionary.registerTransform({
    name: 'attribute/font',
    type: 'attribute',
    transformer: prop => ({
        category: prop.path[0],
        type: prop.path[1],
        name: prop.path[2],
        family: prop.family,
        weight: prop.weight,
        style: prop.style
    })
});
