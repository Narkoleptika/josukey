module.exports = {
    params: {
        scale: 1,
    },
    body: p => {
        const points = [
            [4.810609, 0.005176],
            [4.920442, 0.018308],
            [5.029589, 0.039358],
            [5.137616, 0.068321],
            [5.24409, 0.105192],
            [5.34858, 0.149966],
            [5.450652, 0.202639],
            [5.549875, 0.263206],
            [5.645814, 0.331663],
            [5.738038, 0.408003],
            [5.826114, 0.492223],
            [5.90961, 0.584317],
            [5.988092, 0.684281],
            [6.061128, 0.792111],
            [6.128286, 0.9078],
            [6.189133, 1.031346],
            [6.223656, 1.117727],
            [6.254081, 1.214275],
            [6.280377, 1.319683],
            [6.302515, 1.432644],
            [6.320464, 1.551853],
            [6.334194, 1.676004],
            [6.343674, 1.80379],
            [6.348875, 1.933905],
            [6.349766, 2.065044],
            [6.346317, 2.1959],
            [6.338498, 2.325166],
            [6.326278, 2.451538],
            [6.309627, 2.573708],
            [6.288516, 2.690371],
            [6.262913, 2.80022],
            [6.232789, 2.90195],
            [6.188115, 3.026978],
            [6.13828, 3.148887],
            [6.08276, 3.268311],
            [6.021032, 3.385889],
            [5.952572, 3.502258],
            [5.876857, 3.618055],
            [5.793365, 3.733917],
            [5.701572, 3.850481],
            [5.600954, 3.968384],
            [5.490989, 4.088265],
            [5.371154, 4.210759],
            [5.240924, 4.336504],
            [5.099777, 4.466137],
            [4.94719, 4.600295],
            [4.782639, 4.739616],
            [4.605602, 4.884737],
            [4.484449, 4.984762],
            [4.362436, 5.089649],
            [4.120281, 5.3085],
            [3.888036, 5.530279],
            [3.674599, 5.743971],
            [3.488869, 5.938564],
            [3.339744, 6.103044],
            [3.236124, 6.226398],
            [3.204158, 6.269211],
            [3.186906, 6.297612],
            [3.177133, 6.318769],
            [3.169422, 6.334438],
            [3.166142, 6.340223],
            [3.163141, 6.344648],
            [3.160341, 6.347715],
            [3.158991, 6.348741],
            [3.157661, 6.349429],
            [3.156343, 6.34978],
            [3.155025, 6.349794],
            [3.153698, 6.349471],
            [3.152352, 6.348812],
            [3.149564, 6.346489],
            [3.146583, 6.342828],
            [3.143329, 6.337832],
            [3.139724, 6.331506],
            [3.131145, 6.314876],
            [3.120216, 6.292969],
            [3.106306, 6.265816],
            [3.088786, 6.233445],
            [3.078475, 6.215313],
            [3.067025, 6.195888],
            [3.054357, 6.175174],
            [3.040393, 6.153175],
            [3.025053, 6.129894],
            [3.00826, 6.105335],
            [2.989933, 6.079503],
            [2.969995, 6.0524],
            [2.948366, 6.024031],
            [2.924969, 5.9944],
            [2.896992, 5.960617],
            [2.864615, 5.923419],
            [2.788216, 5.840292],
            [2.698876, 5.748057],
            [2.599697, 5.649747],
            [2.493783, 5.548399],
            [2.384239, 5.447047],
            [2.274168, 5.348728],
            [2.166673, 5.256477],
            [1.663406, 4.831883],
            [1.485091, 4.678824],
            [1.340941, 4.552123],
            [1.219922, 4.44193],
            [1.110998, 4.338393],
            [1.003134, 4.231663],
            [0.885296, 4.111889],
            [0.772877, 3.992391],
            [0.668696, 3.872494],
            [0.572618, 3.751869],
            [0.48451, 3.630186],
            [0.404237, 3.507117],
            [0.331665, 3.382329],
            [0.266659, 3.255495],
            [0.209087, 3.126283],
            [0.158813, 2.994365],
            [0.115705, 2.85941],
            [0.079626, 2.721089],
            [0.050444, 2.579071],
            [0.028025, 2.433028],
            [0.012234, 2.282628],
            [0.002937, 2.127543],
            [0, 1.967442],
            [0.001497, 1.820206],
            [0.006023, 1.693288],
            [0.009625, 1.636178],
            [0.014227, 1.582623],
            [0.01991, 1.532116],
            [0.026756, 1.484147],
            [0.034845, 1.438209],
            [0.044258, 1.393794],
            [0.055077, 1.350394],
            [0.067382, 1.3075],
            [0.081254, 1.264605],
            [0.096775, 1.2212],
            [0.133085, 1.130829],
            [0.168017, 1.052729],
            [0.204936, 0.977191],
            [0.243826, 0.904236],
            [0.284671, 0.833884],
            [0.327456, 0.766155],
            [0.372164, 0.701069],
            [0.41878, 0.638647],
            [0.467287, 0.578908],
            [0.517671, 0.521873],
            [0.569914, 0.467562],
            [0.624001, 0.415995],
            [0.679917, 0.367192],
            [0.737645, 0.321173],
            [0.797169, 0.277959],
            [0.858474, 0.23757],
            [0.921544, 0.200025],
            [1.007084, 0.152364],
            [1.047037, 0.131146],
            [1.085908, 0.111634],
            [1.124292, 0.0938],
            [1.162785, 0.077619],
            [1.201983, 0.063063],
            [1.242483, 0.050105],
            [1.284881, 0.03872],
            [1.329772, 0.02888],
            [1.377753, 0.020559],
            [1.42942, 0.013729],
            [1.485368, 0.008365],
            [1.546195, 0.004438],
            [1.612496, 0.001924],
            [1.684867, 0.000794],
            [1.760117, 0.000977],
            [1.828292, 0.002559],
            [1.890113, 0.005598],
            [1.9463, 0.010153],
            [1.997572, 0.016284],
            [2.044649, 0.024048],
            [2.088253, 0.033505],
            [2.129102, 0.044715],
            [2.167917, 0.057734],
            [2.205419, 0.072624],
            [2.242327, 0.089442],
            [2.279361, 0.108248],
            [2.317241, 0.1291],
            [2.356688, 0.152057],
            [2.443162, 0.204523],
            [2.499807, 0.241434],
            [2.556282, 0.282794],
            [2.612215, 0.328128],
            [2.667231, 0.376961],
            [2.720958, 0.428819],
            [2.773021, 0.483227],
            [2.823047, 0.53971],
            [2.870663, 0.597793],
            [2.915494, 0.657002],
            [2.957167, 0.716861],
            [2.995309, 0.776897],
            [3.029545, 0.836633],
            [3.059503, 0.895596],
            [3.084808, 0.953311],
            [3.105087, 1.009302],
            [3.119967, 1.063096],
            [3.159654, 1.236133],
            [3.25755, 0.998008],
            [3.31287, 0.875803],
            [3.374857, 0.761598],
            [3.44308, 0.655387],
            [3.517105, 0.557165],
            [3.5965, 0.466929],
            [3.680832, 0.384673],
            [3.769669, 0.310392],
            [3.862577, 0.244082],
            [3.959125, 0.185738],
            [4.05888, 0.135354],
            [4.161409, 0.092927],
            [4.266279, 0.058452],
            [4.373058, 0.031922],
            [4.481313, 0.013335],
            [4.590611, 0.002685],
            [4.700521, -0.000033],
        ]
        .map(([x, y])=> `(xy ${p.xy(x * p.scale, y * p.scale)})`)
        .join(' ')
        return `
            (gr_poly
                (pts${points})
                (stroke (width 0) (type solid)) (fill solid) (layer "B.Mask")
            )
            (gr_poly
                (pts${points})
                (stroke (width 0) (type solid)) (fill solid) (layer "B.Cu")
            )
        `
    }
}
