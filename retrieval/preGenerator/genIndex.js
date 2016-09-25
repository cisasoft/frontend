var idx = lunr(function () {
    this.field('title', 100);//标题
    this.field('author', 100);//作者
    this.field('abstract',10);//摘要
    this.field('content',10);//正文
    this.ref('id')
});

var docs = [];

var doc1 = {
    "title": "A Low Complexity Cluster Model Interpolation based On-Line Adaptation Technique for Spoken Query Systems",
    "author": "S Shahnawazuddin and Rohit Sinha",
    "abstract": "The work presented in this paper describes the issues of on-line adaption in context of spoken query systems. In such systems, the available adaptation data is extremely small (≤ 3 seconds). Consequently, adapting such systems becomes extremely challenging. Moreover, since these systems are meant for real-time applications, the employed adaptation technique should not add much latency to the system response. To address these issues, a simple cluster model interpolation based approach for on-line adaptation is presented in this work. The proposed approach employs an OMP based search scheme to select a set of acoustically close models from a set of pre-trained cluster models. The selected cluster models are then linearly interpolated to derive the adapted model parameters. In this work, these interpolation weights are derived from the sparse coefficients in an approximate manner. Such an approximate approach helps in avoiding the iterative ML weight estimation usually employed in existing techniques. The proposed adaptation approach though not optimal, is found to be effective for on-line adaptation. The same has been verified in this work for an LVCSR task and also for an Assamese name recognition system which is a typical example of such query systems.",
    "content": "Spoken query system, fast adaptation, on-line adaptation, acoustic model interpolation, sparse representation.",
    "id": "102.pdf"
};

idx.add(doc1);
docs.push(doc1);

var doc2 = {
    "title": "The Vietnamese Speech Recognition Based on Rectified Linear Units Deep Neural Network and Spoken Term Detection System Combination",
    "author": "Shifu Xiong, Wu Guo, Diyuan Liu",
    "abstract": "In this paper, we report our recent progress on the underresource language automatic speech recognition (ASR) and the following spoken term detection (STD). The experiments are carried on the National Institute of Standards and Technology (NIST) Open Keyword Search 2013 (OpenKWS13) evaluation Vietnamese corpus. Compared with the conventional ASR system, we made the following modifications to improve recognition accuracy. First, pitch features and tone modeling are applied to cover pitch and tone information since Vietnamese is a tonal language. Second, automatic question generation for decision tree is used for state tying to address the problem of lack of linguistic knowledge. Finally, we investigate rectified linear units (ReLUs) activation function and cross-lingual pretraining in deep neural network (DNN) acoustic model training. In the STD procedure, we adopt term-dependent score normalization and combine the outputs of diverse ASR systems to increase actual term weighted value (ATWV). After applying these methods, our current best single system achieves 48.32% word accuracy and 0.398 ATWV after STD system combination on OpenKWS13 Vietnamese development set.",
    "content": "under-resource speech recognition, deep neural network, rectified linear units, spoken term detection, system combination",
    "id": "104.pdf"
};

idx.add(doc2);
docs.push(doc2);

var doc3 = {
    "title": "TANDEM-Bottleneck Feature Combination using Hierarchical Deep Neural Networks",
    "author": "Mirco Ravanelli, Van Hai Do, Adam Janin",
    "abstract": "To improve speech recognition performance, a combination between TANDEM and bottleneck Deep Neural Networks (DNN) is investigated. In particular, exploiting a feature combination performed by means of a multi-stream hierarchical processing, we show a performance improvement by combining the same input features processed by different neural networks. The experiments are based on the spontaneous telephone recordings of the Cantonese IARPA Babel corpus using both standard MFCCs and Gabor as input features. Index Terms: Deep Neural Networks, TANDEM feature, bottleneck feature. 1. Introduction Despite the remarkable progress of the last decade, Automatic Speech Recognition (ASR) is still far from the human level performance, especially in noisy environments and in presence of spontaneous speech. One promising research direction recently arisen is represented by the so called Deep Neural Networks (DNN) [1], usually formed by feed-forward Neural Networks (NN) with many hidden layers properly introduced inside the speech recognition process [2, 3]. Interesting features of both NNs and DNNs are the inherent discriminative nature, a fewer model assumption about the input distribution, the non-linearity of the classification and the flexibility of merging multiple input streams. Beside DNNs directly inheriting all the advantages of standard NNs, a deeper architecture allows a more complex non-linear transformation able to significantly increase the representational power of the network. Although the theoretical benefits of DNNs have been known for many decades [4], their practical use was limited to shallow architectures, since NNs with many hidden layers were very difficult to train, as weights to layers far from the targets tended to remain fairly constant during training. Nevertheless, some noteworthy algorithmic progress, such as the introduction of an unsupervised greedy layer-wise training method based on Restricted Boltzmann Machines (RBM) [5], has renewed interest in their use. Although NNs and DNNs can be used in many ways inside a speech recognition system, the most popular approaches can be divided into two main categories: hybrid approaches and TANDEM approaches. Hybrid architectures [6] exploit a discriminative trained Multi-Layer Perceptron (MLP) to estimate HMM state posterior probabilities instead of using a standard Gaussian Mixture Model (GMM). TANDEM approaches [7], on the * This work was performed while the authors were visiting ICSI other hand, augment the input to a GMM-HMM system with features derived from a neural network based transformation. Typically TANDEM techniques are based on a MLP estimating the posterior probability over a set of target phones and, after a logarithmic smoothing followed by a linear feature reduction step, such processed posteriors are directly used as feature for a GMM-HMM speech recognizer. Other interesting TANDEMlike systems are TRAPS [8] and HATs [9] techniques, which aim to extract long-term information about phones from critical bands. Another recent progress is represented by the bottleneck approach [10], which can be considered as an architectur",
    "content": "To improve speech recognition performance, a combination between TANDEM and bottleneck Deep Neural Networks (DNN) is investigated. In particular, exploiting a feature combination performed by means of a multi-stream hierarchical processing, we show a performance improvement by combining the same input features processed by different neural networks. The experiments are based on the spontaneous telephone recordings of the Cantonese IARPA Babel corpus using both standard MFCCs and Gabor as input features",
    "id": "107.pdf"
};

idx.add(doc3);
docs.push(doc3);
