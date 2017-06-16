const gulp = require('gulp');
const svgo = require('gulp-svgo');

const path = {
    src: {
        svg: 'src/**/*.svg'
    },
    dist: {
        svg: 'dist/'
    }
};

const options = {
    plugins: [
        {
            cleanupAttrs: {
                newlines: true,
                trim: true,
                spaces: true
            }
        },
        { removeDoctype: true },
        { removeXMLProcInst: true },
        { removeComments: true },
        { removeMetadata: true },
        { removeTitle: true },
        {
            removeDesc: {
                removeAny: true
            }
        },
        { removeUselessDefs: true },
        { removeEditorsNSData: true },
        { removeEmptyAttrs: true },
        { removeHiddenElems: true },
        {
            removeEmptyText: {
                text: true,
                tspan: true,
                tref: true
            }
        },
        { removeEmptyContainers: true },
        { cleanupEnableBackground: true },
        {
            convertPathData: {
                applyTransforms: true,
                applyTransformsStroked: true,
                makeArcs: {
                    threshold: 2.5, // coefficient of rounding error
                    tolerance: 0.5  // percentage of radius
                },
                straightCurves: true,
                lineShorthands: true,
                curveSmoothShorthands: true,
                floatPrecision: 3,
                transformPrecision: 5,
                removeUseless: true,
                collapseRepeated: true,
                utilizeAbsolute: true,
                leadingZero: true,
                negativeExtraSpace: true
            }
        },
        {
            convertTransform: {
                convertToShorts: true,
                // degPrecision: 3, // transformPrecision (or matrix precision) - 2 by default
                floatPrecision: 3,
                transformPrecision: 5,
                matrixToTransform: true,
                shortTranslate: true,
                shortScale: true,
                shortRotate: true,
                removeUseless: true,
                collapseIntoOne: true,
                leadingZero: true,
                negativeExtraSpace: false
            }
        },
        {
            removeUnknownsAndDefaults: {
                unknownContent: true,
                unknownAttrs: true,
                defaultAttrs: true,
                uselessOverrides: true,
                keepDataAttrs: true,
                keepAriaAttrs: false
            }
        },
        { removeNonInheritableGroupAttrs: true },
        {
            removeUselessStrokeAndFill: {
                stroke: true,
                fill: true,
                removeNone: false,
                hasStyleOrScript: false
            }
        },
        { removeUnusedNS: true },
        {
            cleanupIDs: {
                remove: true,
                minify: true,
                prefix: '',
                preserve: [],
                force: false
            }
        },
        { collapseGroups: true},
        {
            mergePaths: {
                collapseRepeated: true,
                leadingZero: true,
                negativeExtraSpace: true
            }
        },
        { convertShapeToPath: true },
        {
            sortAttrs: {
                order: [
                    'id',
                    'width', 'height',
                    'x', 'x1', 'x2',
                    'y', 'y1', 'y2',
                    'cx', 'cy', 'r',
                    'fill', 'stroke', 'marker',
                    'd', 'points'
                ]
            }
        },
        {
            removeAttrs: {
                attrs: [
                    'fill',
                    'style',
                    'color',
                    'mask',
                    'fill-rule'
                ]
            }
        },
        { removeStyleElement: true },
        { removeMaskElement: true }
        // {
        //     addAttributesToSVGElement: {
        //         attribute: 'fill="currentColor"'
        //     }
        // }
    ]
};

gulp.task('svgo', () => {
    gulp.src(path.src.svg)
        .pipe(svgo(options))
        .pipe(gulp.dest(path.dist.svg));
});
