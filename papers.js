// Every paper on the site lives here. Add a new one by copying a block.
// Fields:  id (unique), title, authors, year, theme, venue (optional),
//          pdf (file in papers/), arxiv (id, optional), doi (optional),
//          rg (ResearchGate publication URL, optional), video (YouTube id, optional),
//          note (one plain-language sentence), abstract.
// Themes:  rmtdl  = random matrices and deep learning
//          rmt    = random matrices and high-dimensional probability
//          dyn    = dynamical systems and chaos
//          top    = topology, K-theory, operator algebras
//          comb   = combinatorics and fixed points

const RG_PROFILE = "https://www.researchgate.net/profile/Yitzchak-Shmalo-2";

const PAPERS = [
  // ---------- random matrices and deep learning ----------
  {
    id: "2310.03165", theme: "rmtdl", year: 2024,
    title: "Enhancing accuracy in deep learning using random matrix theory",
    authors: "Leonid Berlyand, Etienne Sandier, Yitzchak Shmalo, Lei Zhang",
    venue: "Journal of Machine Learning 3 (2024), no. 4, 347-412",
    pdf: "2310.03165.pdf", arxiv: "2310.03165",
    rg: "https://www.researchgate.net/publication/374475045",
    note: "Prune the singular values that look like noise under the Marchenko-Pastur law and the network gets smaller and, often, more accurate.",
    abstract: "We explore the applications of random matrix theory (RMT) in the training of deep neural networks (DNNs), focusing on layer pruning that reduces the number of DNN parameters (weights). Our numerical results show that this pruning leads to a drastic reduction of parameters while not reducing the accuracy of DNNs and convolutional neural networks (CNNs). Moreover, pruning the fully connected DNNs actually increases the accuracy and decreases the variance for random initializations. Our numerics indicate that this enhancement in accuracy is due to the simplification of the loss landscape. We next provide rigorous mathematical underpinning of these numerical results by proving the RMT-based Pruning Theorem. Our results offer valuable insights into the practical application of RMT for the creation of more efficient and accurate deep-learning models."
  },
  {
    id: "2210.08415", theme: "rmtdl", year: 2024,
    title: "Stability of accuracy for the training of DNNs via the uniform doubling condition",
    authors: "Yitzchak Shmalo",
    venue: "Annals of Mathematics and Artificial Intelligence 92 (2024), 439-483",
    pdf: "2210.08415.pdf", arxiv: "2210.08415", doi: "10.1007/s10472-023-09919-1",
    note: "A geometric condition on the training data under which accuracy cannot collapse while the loss keeps decreasing.",
    abstract: "We study the stability of accuracy during the training of deep neural networks (DNNs). In this context, the training of a DNN is performed via the minimization of a cross-entropy loss function, and the performance metric is accuracy (the proportion of objects that are classified correctly). While training results in a decrease of loss, the accuracy does not necessarily increase during the process and may sometimes even decrease. The goal of achieving stability of accuracy is to ensure that if accuracy is high at some initial time, it remains high throughout training. A recent result by Berlyand, Jabin, and Safsten introduces a doubling condition on the training data, which ensures the stability of accuracy during training for DNNs using the absolute value activation function. For training data in R^n, this doubling condition is formulated using slabs in R^n and depends on the choice of the slabs. The goal of this paper is twofold. First, to make the doubling condition uniform, that is, independent of the choice of slabs. This leads to sufficient conditions for stability in terms of training data only. In other words, for a training set T that satisfies the uniform doubling condition, there exists a family of DNNs such that a DNN from this family with high accuracy on the training set at some training time t_0 will have high accuracy for all time t > t_0. Moreover, establishing uniformity is necessary for the numerical implementation of the doubling condition. We demonstrate how to numerically implement a simplified version of this uniform doubling condition on a dataset and apply it to achieve stability of accuracy using a few model examples. The second goal is to extend the original stability results from the absolute value activation function to a broader class of piecewise linear activation functions with finitely many critical points, such as the popular Leaky ReLU."
  },
  {
    id: "2303.08986", theme: "rmtdl", year: 2023,
    title: "Deep learning weight pruning with RMT-SVD: increasing accuracy and reducing overfitting",
    authors: "Yitzchak Shmalo, Jonathan Jenkins, Oleksii Krupchytskyi",
    pdf: "2303.08986.pdf", arxiv: "2303.08986",
    rg: "https://www.researchgate.net/publication/369301922",
    note: "The first pruning experiments: remove the singular values inside the Marchenko-Pastur bulk during training and overfitting drops.",
    abstract: "In this work, we present some applications of random matrix theory for the training of deep neural networks. Recently, random matrix theory (RMT) has been applied to the overfitting problem in deep learning. Specifically, it has been shown that the spectrum of the weight layers of a deep neural network (DNN) can be studied and understood using techniques from RMT. In this work, these RMT techniques will be used to determine which and how many singular values should be removed from the weight layers of a DNN during training, via singular value decomposition (SVD), so as to reduce overfitting and increase accuracy. We show the results on a simple DNN model trained on MNIST. In general, these techniques may be applied to any fully connected layer of a pretrained DNN to reduce the number of parameters in the layer while preserving and sometimes increasing the accuracy of the DNN."
  },
  {
    id: "dissertation", theme: "rmtdl", year: 2025,
    title: "Applications of random matrix theory to deep learning",
    authors: "Yitzchak Shmalo",
    venue: "Ph.D. dissertation, Pennsylvania State University, August 2025. Advisor: Leonid Berlyand",
    pdf: "shmalo_dissertation_2025.pdf",
    note: "The whole random-matrix story in one place: pruning, stability of accuracy, and what the spectrum of a weight matrix says about training.",
    abstract: "In this thesis we explore the application of random matrix theory to deep learning, in particular to the pruning of deep neural networks and to the stability of their accuracy during training."
  },
  {
    id: "2503.01922", theme: "rmtdl", year: 2025,
    title: "Pruning deep neural networks via a combination of the Marchenko-Pastur distribution and regularization",
    authors: "Leonid Berlyand, Theo Bourdais, Houman Owhadi, Yitzchak Shmalo",
    pdf: "2503.01922.pdf", arxiv: "2503.01922",
    rg: "https://www.researchgate.net/publication/389484743",
    note: "Marchenko-Pastur pruning combined with a regularizer that keeps the retained spectrum informative, applied to Vision Transformers.",
    abstract: "Deep neural networks (DNNs) have brought significant advancements in various applications in recent years, such as image recognition, speech recognition, and natural language processing. In particular, Vision Transformers (ViTs) have emerged as a powerful class of models in the field of deep learning for image classification. In this work, we propose a novel Random Matrix Theory (RMT)-based method for pruning pre-trained DNNs, based on the sparsification of weights and singular vectors, and apply it to ViTs. RMT provides a robust framework to analyze the statistical properties of large matrices, which has been shown to be crucial for understanding and optimizing the performance of DNNs. We demonstrate that our RMT-based pruning can be used to reduce the number of parameters of ViT models (trained on ImageNet) by 30-50% with less than 1% loss in accuracy. To our knowledge, this represents the state-of-the-art in pruning for these ViT models. Furthermore, we provide a rigorous mathematical underpinning of the above numerical studies, namely we proved a theorem for fully connected DNNs, and other more general DNN structures, describing how the randomness in the weight matrices of a DNN decreases as the weights approach a local or global minimum (during training). We verify this theorem through numerical experiments on fully connected DNNs, providing empirical support for our theoretical findings. Moreover, we prove a theorem that describes how DNN loss decreases as we remove randomness in the weight layers, and show a monotone dependence of the decrease in loss with the amount of randomness that we remove. Our results also provide significant RMT-based insights into the role of regularization during training and pruning."
  },
  {
    id: "2606.02608", theme: "rmtdl", year: 2026,
    title: "Pruning deep neural networks via the Marchenko-Pastur distribution",
    authors: "Leonid Berlyand, Theo Bourdais, Houman Owhadi, Yitzchak Shmalo",
    pdf: "2606.02608.pdf", arxiv: "2606.02608",
    note: "The clean version of the pruning story: an accuracy-retention argument under short calibration and fine-tuning schedules.",
    abstract: "We study pruning of deep neural networks through the lens of random matrix theory. Treating each weight matrix as signal plus noise, the Marchenko-Pastur law gives a data-driven threshold below which singular values are removed. The main practical contribution is accuracy retention under short calibration and fine-tuning schedules rather than a long post-pruning reoptimization pipeline, demonstrated on Vision Transformers trained on ImageNet, together with theory relating the removed randomness to the loss."
  },
  {
    id: "2608.14638", theme: "rmtdl", year: 2026,
    title: "Randomly initialized autoencoders: fixed points and edge-of-chaos",
    authors: "Leonid Berlyand, Roman Sarapin, Yitzchak Shmalo, Victor Slavin, Sasha Sodin",
    pdf: "2608.14638.pdf", arxiv: "2608.14638",
    note: "What a random autoencoder does when you iterate it: fixed points, and the line where the dynamics turns chaotic.",
    abstract: "We study randomly initialized autoencoders as dynamical systems: the map obtained by composing encoder and decoder is iterated, and the question is what the iterates do. We describe the fixed points of the iterated map and the transition between an ordered regime, in which iterates contract, and a chaotic one, in terms of the variance of the initialization. The edge-of-chaos line is located analytically for the simplest architectures and confirmed numerically for deeper ones."
  },
  {
    id: "2607.07778", theme: "rmtdl", year: 2026,
    title: "A law of robustness for two-layer neural networks with arbitrary weights",
    authors: "Yitzchak Shmalo",
    pdf: "2607.07778.pdf", arxiv: "2607.07778",
    note: "How smooth a two-layer network can be while still fitting noisy data, with no assumption on the weights.",
    abstract: "We prove a law of robustness for two-layer neural networks with arbitrary weights: a network that interpolates noisy labels on n data points must have a Lipschitz constant that grows with n unless the number of parameters is large. Unlike previous versions, no assumption is placed on the distribution of the weights, so the bound applies to trained networks and not only to random ones."
  },
  {
    id: "2609.00389", theme: "rmtdl", year: 2026,
    title: "Neural means and kernel corrections for operator learning",
    authors: "Yitzchak Shmalo",
    pdf: "2609.00389.pdf", arxiv: "2609.00389",
    note: "Learn the operator's mean with a network, then correct the residual with a kernel; the split is where the accuracy comes from.",
    abstract: "We study operator learning through a decomposition into a neural mean and a kernel correction. The neural network captures the bulk of the operator, and a kernel method fitted to the residual supplies the correction and an error estimate. We give conditions under which the corrected estimator improves on either component alone and illustrate the method on parametric partial differential equations."
  },
  {
    id: "adv-fragility", theme: "rmtdl", year: 2026,
    title: "Constructive adversarial fragility of deep neural networks, ResNets, and Vision Transformers",
    authors: "Yitzchak Shmalo",
    venue: "Preprint (ResearchGate)",
    pdf: "constructive_adversarial_fragility_dnns_resnets_vits.pdf", rg: RG_PROFILE,
    note: "Adversarial examples built by hand from the geometry, for the architectures people actually use.",
    abstract: "We connect the geometric balance-based view of adversarial vulnerability with constructive single-gradient attacks, and show that fragility of deep networks, residual networks and Vision Transformers can be produced explicitly rather than merely proved to exist. The constructions quantify how the balance parameter of a classifier controls the distance to the nearest adversarial point."
  },
  {
    id: "adv-balance", theme: "rmtdl", year: 2026,
    title: "Balance, threshold calibration, and adversarial neighbors on the sphere, with applications to random deep networks",
    authors: "Yitzchak Shmalo",
    venue: "Preprint (ResearchGate, posted as \"Adversarial properties of random deep neural networks via balance and spherical concentration\")",
    pdf: "balance_threshold_calibration_adversarial_neighbors_sphere.pdf", rg: RG_PROFILE,
    note: "One number, how balanced a classifier's decision is on the sphere, decides whether nearby adversarial points must exist.",
    abstract: "We isolate a single geometric parameter governing the existence of nearby adversarial points on a high-dimensional sphere. A balance-based reformulation of spherical concentration shows that any measurable classifier whose decision regions are not extremely unbalanced has adversarial neighbors at a distance of order one over the square root of the dimension, and we apply this to random deep networks at initialization."
  },

  // ---------- random matrices and high-dimensional probability ----------
  {
    id: "2607.06249", theme: "rmt", year: 2026,
    title: "Extreme least singular values of Gaussian row submatrices and a phase retrieval stability problem",
    authors: "Yitzchak Shmalo",
    pdf: "2607.06249.pdf", arxiv: "2607.06249",
    note: "Among all ways to choose rows of a Gaussian matrix, how small can the smallest singular value be made? Sharp exponent, and what it says about phase retrieval.",
    abstract: "We determine the exponential rate at which the least singular value of an N by m Gaussian matrix can be driven to zero by an adversarial choice of a fraction of its rows, and relate this coordinate-optimized least singular value to the stability constant of phase retrieval. The rate is expressed through the binary entropy of the retained fraction and the dimension of the field."
  },
  {
    id: "2608.07410", theme: "rmt", year: 2026,
    title: "Extreme least singular values of random row submatrices with bounded-density subgaussian entries",
    authors: "Xiufan Yang, Shu Wen, Yitzchak Shmalo",
    pdf: "2608.07410.pdf", arxiv: "2608.07410",
    note: "The Gaussian result survives when the entries are merely subgaussian with a bounded density.",
    abstract: "We extend the sharp exponent for the coordinate-optimized least singular value from Gaussian matrices to matrices with independent subgaussian entries having a bounded density. The proof replaces the rotational invariance used in the Gaussian case with small-ball estimates and a net argument at the mesoscopic scale."
  },
  {
    id: "lsv-redundancy", theme: "rmt", year: 2026,
    title: "Extreme least singular values with redundancy, radial ensembles, and quantitative stability of phase retrieval",
    authors: "Yitzchak Shmalo",
    venue: "Preprint (ResearchGate)",
    pdf: "extreme_least_singular_values_redundancy_radial_ensembles.pdf", rg: RG_PROFILE,
    note: "The same question with redundant measurements and non-Gaussian radial laws, turned into explicit stability constants for phase retrieval.",
    abstract: "For real and complex fields we study the least singular value of the worst row submatrix in the redundant regime, for Gaussian and for radial ensembles, and derive quantitative stability constants for phase retrieval from the resulting large deviation rates."
  },
  {
    id: "2608.19594", theme: "rmt", year: 2026,
    title: "Mesoscopic rectangular spikes under subspace local laws: outlier values and singular subspaces",
    authors: "Yitzchak Shmalo",
    pdf: "2608.19594.pdf", arxiv: "2608.19594",
    note: "Signal-plus-noise matrices when the rank of the signal grows with the dimension: where the outliers go and what the singular vectors remember.",
    abstract: "We study additive deformations W = X + P of rectangular random matrices when the rank of the signal may grow with the dimension. The probabilistic input is a subspace local law; from it we derive the locations of the outlier singular values and the overlaps of the outlier singular subspaces with the signal, in the mesoscopic-rank regime where the rank is unbounded but sublinear in the dimension."
  },
  {
    id: "meso-spikes", theme: "rmt", year: 2026,
    title: "Mesoscopic additive spikes for rectangular random matrices",
    authors: "Yitzchak Shmalo",
    venue: "Preprint (ResearchGate); earlier form of the subspace-local-law paper",
    pdf: "mesoscopic_additive_spikes_rectangular_random_matrices.pdf", rg: RG_PROFILE,
    note: "The first pass at the growing-rank spiked model, organized around an abstract ordered-matching principle.",
    abstract: "Let W = X + P with X rectangular noise and P of rank r growing sublinearly with the dimension. We study the singular values of W in this mesoscopic-rank regime through an abstract ordered matching theorem and Haar singular-vector models."
  },
  {
    id: "matrix-spencer", theme: "rmt", year: 2026,
    title: "Matrix Spencer for Toeplitz, Hankel, and finite-entropy lift classes",
    authors: "Yitzchak Shmalo",
    venue: "Preprint (ResearchGate)",
    pdf: "matrix_spencer_toeplitz_hankel_finite_entropy_lifts.pdf", rg: RG_PROFILE,
    note: "The Matrix Spencer conjecture proved for matrix families that lift to a finite-entropy structure, Toeplitz and Hankel among them.",
    abstract: "The Matrix Spencer conjecture asks whether for every collection of n self-adjoint n by n matrices of operator norm at most one there is a sign vector whose signed sum has norm of order the square root of n. We prove the conjectured bound for Toeplitz and Hankel families and, more generally, for classes admitting a finite-entropy lift."
  },
  {
    id: "toeplitz-avg", theme: "rmt", year: 2026,
    title: "An improved spectral averaging bound for the random Toeplitz limit law",
    authors: "Yitzchak Shmalo",
    venue: "Preprint (ResearchGate)",
    pdf: "improved_spectral_averaging_bound_random_toeplitz.pdf", rg: RG_PROFILE,
    note: "A sharper bound on how the limiting spectral law of random symmetric Toeplitz matrices averages.",
    abstract: "For the random symmetric Toeplitz matrix with independent centered entries, we improve the known spectral averaging bound for the limiting spectral distribution, whose closed form remains unknown."
  },
  {
    id: "2607.11010", theme: "rmt", year: 2026,
    title: "The storage capacity of the Ising perceptron: verification of the outstanding numerical conditions",
    authors: "Yitzchak Shmalo",
    pdf: "2607.11010.pdf", arxiv: "2607.11010",
    note: "The Krauth-Mezard capacity of the binary perceptron rested on two unverified numerical conditions; this paper verifies them with replayable certificates.",
    abstract: "The storage capacity of the Ising (binary-weight) perceptron predicted by Krauth and Mezard was established rigorously up to two numerical conditions. We verify these outstanding conditions with rigorous computer-assisted estimates and release the complete verification programs and machine-checkable certificates, so that the proof can be replayed without trusting the author's hardware."
  },

  // ---------- dynamical systems ----------
  {
    id: "1706.08960", theme: "dyn", year: 2018,
    title: "Combinatorial approach to detection of fixed points, periodic orbits, and symbolic dynamics",
    authors: "Marian Gidea, Yitzchak Shmalo",
    venue: "Discrete and Continuous Dynamical Systems 38 (2018), 6123-6148",
    pdf: "1706.08960.pdf", arxiv: "1706.08960",
    rg: "https://www.researchgate.net/publication/317955140",
    note: "Find fixed points and horseshoes in a chaotic map by drawing pictures: a Sperner-type argument replaces index theory.",
    abstract: "We present a combinatorial approach to rigorously show the existence of fixed points, periodic orbits, and symbolic dynamics in discrete-time dynamical systems, as well as to find numerical approximations of such objects. Our approach relies on the method of correctly aligned windows. We subdivide the correctly aligned windows into cubical complexes, and we assign to the vertices of the cubes labels determined by the dynamics. In this way we encode the information on the dynamics into combinatorial structure. We use a version of the Sperner Lemma saying that if the labeling satisfies certain conditions, then there exist fixed points/periodic orbits/orbits with prescribed itineraries. The method developed here does not require the computation of algebraic topology-type invariants, as only combinatorial information is needed; our arguments are elementary."
  },
  {
    id: "dense-chaos", theme: "dyn", year: 2026,
    title: "Dense simultaneous distributional chaos and infinite entropy in the full space of non-autonomous interval systems",
    authors: "Yitzchak Shmalo",
    venue: "Preprint (ResearchGate)",
    pdf: "dense_simultaneous_distributional_chaos_infinite_entropy.pdf", rg: RG_PROFILE,
    note: "In the space of all sequences of interval maps, the ones with every kind of chaos at once are dense. Answers a question of Balibrea and Rucki.",
    abstract: "Let F(I) be the full space of non-autonomous interval systems with the uniform metric. A recent problem of Balibrea and Rucki asks whether distributional chaos of all types can occur simultaneously and generically. We show that systems exhibiting simultaneous distributional chaos together with infinite topological entropy form a dense subset."
  },
  {
    id: "moving-horseshoes", theme: "dyn", year: 2026,
    title: "Strict moving horseshoes and generic full complexity in non-autonomous interval systems",
    authors: "Yitzchak Shmalo",
    venue: "Preprint (ResearchGate)",
    pdf: "strict_moving_horseshoes_generic_full_complexity.pdf", rg: RG_PROFILE,
    note: "The chaos is not just dense but generic: a residual set of interval sequences carries moving horseshoes and full complexity.",
    abstract: "We construct strict moving horseshoes for non-autonomous interval systems and show that full complexity, in the sense of distributional chaos and infinite entropy on every tail, holds on a residual subset of the full space."
  },
  {
    id: "cubical-horseshoes", theme: "dyn", year: 2026,
    title: "Strict cubical horseshoes and all-tail full complexity in non-autonomous dynamics",
    authors: "Yitzchak Shmalo",
    venue: "Preprint (ResearchGate)",
    pdf: "strict_cubical_horseshoes_all_tail_full_complexity.pdf", rg: RG_PROFILE,
    note: "The same picture in every dimension: cubes and compact manifolds, with windows that are allowed to move.",
    abstract: "For every cube and every compact smooth manifold, and for every sequence of dense open windows, we build strict cubical horseshoes and prove that all-tail full complexity is generic in the corresponding space of non-autonomous systems."
  },
  {
    id: "universal-windows", theme: "dyn", year: 2026,
    title: "Universal dense-open windows for generic conservative surface semigroups and graph-directed local systems",
    authors: "Yitzchak Shmalo",
    venue: "Preprint (Research Square)",
    pdf: "universal_dense_open_windows_conservative_surface_semigroups.pdf", rg: RG_PROFILE,
    note: "A Baire-category theorem for pairs of area-preserving surface maps: generically, their semigroup is transitive through any dense open window.",
    abstract: "We prove a universal dense-open window theorem for generic conservative pairs on a closed orientable surface: there is a residual set of pairs whose generated semigroup is transitive relative to every sequence of dense open windows, and we extend the statement to graph-directed local systems."
  },
  {
    id: "residual-windows", theme: "dyn", year: 2026,
    title: "Residual windows for partial semigroups and graph-directed conservative dynamics",
    authors: "Yitzchak Shmalo",
    venue: "Preprint",
    pdf: "residual_windows_partial_semigroups_graph_directed.pdf", rg: RG_PROFILE,
    note: "The window theorem when the maps are only partially defined and their admissible domains are merely comeagre.",
    abstract: "We prove a residual-window transitivity theorem for countable families of partial homeomorphisms whose structural domains are open but whose admissible domains are only comeagre in them, with applications to graph-directed conservative dynamics."
  },

  // ---------- topology, K-theory, operator algebras ----------
  {
    id: "1805.10629", theme: "top", year: 2019,
    title: "The K-theoretic bulk-boundary principle for dynamically patterned resonators",
    authors: "Emil Prodan, Yitzchak Shmalo",
    venue: "Journal of Geometry and Physics 135 (2019), 135-171",
    pdf: "1805.10629.pdf", arxiv: "1805.10629", doi: "10.1016/j.geomphys.2018.10.005",
    rg: "https://www.researchgate.net/publication/325413749",
    note: "Why topological edge modes appear in resonator arrays patterned by a dynamical system, proved with K-theory of crossed products.",
    abstract: "We formulate and prove a bulk-boundary correspondence for resonator arrays whose couplings are patterned by a dynamical system, using the K-theory of the associated crossed-product C*-algebras. The framework covers aperiodic patterns and predicts robust boundary spectrum from bulk invariants, with numerical illustrations."
  },
  {
    id: "doubling-jamming", theme: "top", year: 2026,
    title: "Doubling and jamming: universal Chern Hamiltonians on triangulated surfaces with boundary",
    authors: "Yitzchak Shmalo",
    venue: "Preprint (ResearchGate)",
    pdf: "doubling_and_jamming_universal_chern_hamiltonians.pdf", rg: RG_PROFILE,
    note: "Higson and Prodan's universal Chern insulator lives on closed surfaces; doubling the surface and jamming the seam extends it to surfaces with boundary.",
    abstract: "Higson and Prodan introduced a universal tight-binding Chern-insulator model on triangulated closed oriented surfaces, defined from the simplicial boundary operator and Poincare duality. We extend the construction to surfaces with boundary by a doubling-and-jamming procedure and show that the resulting Hamiltonians carry the expected boundary spectrum."
  },
  {
    id: "boundary-interface", theme: "top", year: 2026,
    title: "Boundary and interface classes for universal Chern Hamiltonians via doubling and jamming",
    authors: "Yitzchak Shmalo",
    venue: "Preprint (ResearchGate)",
    pdf: "boundary_and_interface_classes_universal_chern.pdf", rg: RG_PROFILE,
    note: "The K-theory classes of the boundary and interface modes produced by doubling and jamming, computed and matched to the bulk.",
    abstract: "We compute the boundary and interface K-theory classes of doubled-and-jammed universal Chern Hamiltonians and establish a bulk-interface correspondence for triangulated surfaces with boundary."
  },
  {
    id: "roe-reduction", theme: "top", year: 2026,
    title: "A Roe-algebraic reduction for doubled-and-jammed universal Chern Hamiltonians",
    authors: "Yitzchak Shmalo",
    venue: "Preprint (ResearchGate)",
    pdf: "roe_algebraic_reduction_doubled_jammed_chern.pdf", rg: RG_PROFILE,
    note: "The coarse-geometric part of the story on its own: the doubled-and-jammed construction as a statement about Roe algebras.",
    abstract: "This paper isolates the coarse-geometric and K-theoretic part of the doubled-and-jammed construction for universal Chern Hamiltonians on triangulated surfaces, reducing the boundary correspondence to a computation in Roe algebras."
  },
  {
    id: "2109.03306", theme: "top", year: 2021,
    title: "Algorithm for computing representations of the braid group and Temperley-Lieb algebra",
    authors: "Yitzchak Shmalo",
    pdf: "2109.03306.pdf", arxiv: "2109.03306",
    note: "An explicit algorithm that writes down the matrices of braid-group and Temperley-Lieb representations.",
    abstract: "We present an algorithm for computing the matrices of representations of the braid group and of the Temperley-Lieb algebra, and describe its implementation and the representations it produces."
  },

  // ---------- combinatorics and fixed points ----------
  {
    id: "1811.08454", theme: "comb", year: 2018,
    title: "Combinatorial proof of Kakutani's fixed point theorem",
    authors: "Yitzchak Shmalo",
    pdf: "1811.08454.pdf", arxiv: "1811.08454",
    note: "Kakutani's theorem for set-valued maps, proved from a Sperner-type lemma instead of Brouwer plus approximation.",
    abstract: "We give a combinatorial proof of Kakutani's fixed point theorem for upper semicontinuous set-valued maps with nonempty compact convex values, based on a generalization of Sperner's lemma, avoiding the usual passage through Brouwer's theorem and approximation by single-valued maps."
  },
  {
    id: "1708.07175", theme: "comb", year: 2017,
    title: "A proof of Atanassov's conjecture and other generalizations of Sperner's lemma",
    authors: "Yitzchak Shmalo",
    pdf: "1708.07175.pdf", arxiv: "1708.07175",
    note: "A five-page proof of a conjectured generalization of Sperner's lemma, plus a few more generalizations for free.",
    abstract: "We prove a conjecture of Atanassov generalizing Sperner's lemma to labelings with more labels than the dimension, and derive several further generalizations of Sperner's lemma by the same method."
  }
];

const THEMES = {
  rmtdl: { name: "Random matrices and deep learning", blurb: "Weight matrices are signal plus noise. The Marchenko-Pastur law tells you which is which, and that single observation gives pruning methods, stability theorems and a way to read what training is doing to a network." },
  rmt:   { name: "Random matrices and high-dimensional probability", blurb: "Least singular values, spikes of growing rank, Toeplitz and Hankel spectra, the capacity of the binary perceptron. Sharp constants, and proofs that a computer can replay." },
  dyn:   { name: "Dynamical systems and chaos", blurb: "Horseshoes, windows and Baire category. In the space of all non-autonomous systems, full chaos is not the exception but the rule." },
  top:   { name: "Topology, K-theory and operator algebras", blurb: "Bulk-boundary correspondence for patterned resonators and universal Chern Hamiltonians, proved through K-theory of C*-algebras." },
  comb:  { name: "Combinatorics and fixed points", blurb: "Sperner's lemma and what it can carry: Kakutani, Atanassov's conjecture, and a purely combinatorial way to find fixed points." }
};

const THESES = [
  { degree: "Ph.D. in Mathematics", where: "Pennsylvania State University, 2025", advisor: "Leonid Berlyand", title: "Applications of Random Matrix Theory to Deep Learning" },
  { degree: "M.A. in Mathematics", where: "Yeshiva University, 2017", advisor: "Marian Gidea", title: "Combinatorial Approach to Detection of Fixed Points, Periodic Orbits, and Symbolic Dynamics" },
  { degree: "B.A. in Philosophy and Mathematics, magna cum laude", where: "Yeshiva University, 2016", advisor: "Antonella Marini", title: "Proofs of the Cantor-Bernstein Theorem" }
];

// Recorded talks and paper videos. Add { paper: "<paper id>", youtube: "<video id>", title: "..." }.
// Leave the list empty and the videos page shows the "coming soon" cards for every paper.
const VIDEOS = [];

const CHANNEL_URL = "https://www.youtube.com/@TheThinkingAgnostic";
