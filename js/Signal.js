const MCQ_DATA = [
  { 
    id: 1, 
    question: "1. For the discrete time signal x1[n]=[1,2,3,0,0,2,2] and x2[n]=[-2,-2,2,0,-2], represent the sequence of numbers of x1 * x2:", 
    options: ["A) [2,4]", "B) [0,0,3,5,3,0,0,2]", "C) [3,0,3,0,2,0,1]", "D) none of the above"], 
    answer: "D" 
  },
  { 
    id: 2, 
    question: "2. h[n] = 0.5^n u[n], this system is:", 
    options: ["A) causal and stable", "B) causal and unstable", "C) noncausal and stable", "D) none of the above"], 
    answer: "A" 
  },
  { 
    id: 3, 
    question: "3. y[n] = 2x[n] - x[n-2], Find h[n] for the causal LTI discrete-time system and indicate its type:", 
    options: ["A) h[n]=3u[n], IIR system", "B) h[n]=2δ[n], FIR system", "C) h[n]=2δ[n]-δ[n-2], FIR system", "D) none of the above"], 
    answer: "C" 
  },
  { 
    id: 4, 
    question: "4. X[n]=[1,1] and h[n]=[1,1,1]. Determine the system output:", 
    options: ["A) [1,2,2,1]", "B) [1,2,2,4,2,2,1]", "C) [1,2,4,2,1]", "D) [2,4,4,2]"], 
    answer: "A" 
  },
  { 
    id: 5, 
    question: "5. Determine if the following signal is periodic or non periodic: x[n] = cos(n/2)cos(πn/4)", 
    options: ["A) periodic, period = 4", "B) periodic, period = 8", "C) periodic, period = 16", "D) nonperiodic"], 
    answer: "D" 
  },
  { 
    id: 6, 
    question: "6. Given a time domain signal x(n) = {2, 1, 1, 2}, find X(K):", 
    options: ["A) [0 1-j 6 1+j]", "B) [6 1+j 0 1-j]", "C) [-4 2-j 8 2+j]", "D) [8 2+j -4 2-j]"], 
    answer: "B" 
  },
  { 
    id: 7, 
    question: "7. Consider x[n] = {1, 2, 2} and h[n] = {0, 1, 2, 3}. Calculate circular convolution y[n] = x[n] ⊗ h[n]:", 
    options: ["A) [1,5,4,9]", "B) [10,3,4,5]", "C) [1,7,4,8]", "D) [10,7,4,9]"], 
    answer: "D" 
  },
  { 
    id: 8, 
    question: "8. Compute FFT of x[n] = [1, 2, 3, 4]:", 
    options: ["A) [10, -2+2j, -2, -2-2j]", "B) [10, -2+2j, 2, -2-2j]", "C) [3, 3-4j, 5, 3+4j]", "D) [3, 3+4j, 5, 3-4j]"], 
    answer: "A" 
  },
  { 
    id: 9, 
    question: "9. The complex exponential Fourier series C0 is:", 
    options: ["A) 0", "B) A", "C) A/2", "D) TA"], 
    answer: "C" 
  },
  { 
    id: 10, 
    question: "10. X(ω) = 2a / (a² + ω²). Find the inverse Fourier transform:", 
    options: ["A) x(t) = e^(-at), a>0", "B) x(t) = te^(-at), a>0", "C) x(t) = e^(-a|t|), a>0", "D) None of the above"], 
    answer: "C" 
  },
  { 
    id: 11, 
    question: "11. x(t) = sin²(t). Determine the complex exponential Fourier series representation:", 
    options: ["A) c-1=c1=-1/4, c0=1/2", "B) c-1=c1=-1/4, c-2=c2=+1/4, c0=1/2", "C) c-1=c1=-1/8, c0=1/4", "D) none of the above"], 
    answer: "A" 
  },
  { 
    id: 12, 
    question: "12. Fourier transform of x(t) = e^(j5t):", 
    options: ["A) 2π δ(w+5)", "B) π δ(w+5)", "C) π δ(w-5)", "D) 2π δ(w-5)"], 
    answer: "D" 
  },
  { 
    id: 13, 
    question: "13. The digital frequency of x(n) if x(t) = 3 cos(40π/2 t) and sampling rate = 100 sample/sec is:", 
    options: ["A) 0.2 π", "B) 0.3 π", "C) 0.4 π", "D) 0.5 π"], 
    answer: "A" 
  },
  { 
    id: 14, 
    question: "14. The sampling interval is (for Fs = 100):", 
    options: ["A) 0.1", "B) 0.01", "C) 0.2", "D) 0.002"], 
    answer: "B" 
  },
  { 
    id: 15, 
    question: "15. To design a digital filter Given 𝐻(𝑧) , using the bilinear transformation method, to be used in an A/D-H(z)-D/A structure to satisfy the following equivalent analog specifications (use a sampling rate of 1000 sample/sec). (S1) Maximally flat low pass frequency response with a -2 db cutoff at 5 rad/sec(S2) At least 23 db of attenuation at all radian frequencies greater than 10 rad/sec::", 
    options: ["A) 5 & 10 rad", "B) 2 & 4.82 rad/sec", "C) 0.005 & 0.01 rad", "D) 25 & 100 rad"], 
    answer: "C" 
  },
  { 
    id: 16, 
    question: "16. The order of the filter is:", 
    options: ["A) 2", "B) 3", "C) 4", "D) 5"], 
    answer: "D" 
  },
  { 
    id: 17, 
    question: "17. The cut off frequency for the filter is:", 
    options: ["A) 3.2", "B) 5.2", "C) 4.3", "D) 2.3"], 
    answer: "B" 
  },
  { 
    id: 18, 
    question: "18. To convert H(s) to H(z) ,replace S with :", 
    options: ["A) 2000 (1-Z⁻¹)/(1+Z⁻¹)", "B) 0.001 (1-Z⁻¹)/(1+Z⁻¹)", "C) 0.002 (1+Z⁻¹)/(1-Z⁻¹)", "D) 1000 (1-Z⁻¹)/(1+Z⁻¹)"], 
    answer: "A" 
  },
  { 
    id: 19, 
    question: "19. ADesign an analog Butterworth low pass filter to meet the following specifications 0.9≤|𝐻(𝑗Ω)|≤1 𝑓𝑜𝑟 0≤Ω≤.35π |𝐻(𝑗Ω)|≤.275 𝑓𝑜𝑟 0.7𝜋≤Ω: The values of K1 and K2 are:", 
    options: ["A) -0.95 and 12.3", "B) -0.96 and 16.1", "C) -0.98 and -14.1", "D) -0.9151 and -11.2133"], 
    answer: "D" 
  },
  { 
    id: 20, 
    question: "20. The filter order:", 
    options: ["A) 2", "B) 3", "C) 4", "D) 5"], 
    answer: "B" 
  }
];

const MCQ_DATA1 = [
  // Page 1
  { 
    id: 1, 
    question: "1. For x1(n)={1,2,3,4} and x2(n)={5,6}, represent the sequence of y1(n)=2(x1(n)+x2(n)):", 
    options: ["a. {0,0,15,24}", "b. {0,0,15,24,2}", "c. {1,2,3,9,6}", "d. {2,4,6,18,12}"], 
    answer: "d" 
  },
  { 
    id: 2, 
    question: "2. The fundamental period of cos²(π/8 * n) is:", 
    options: ["a. 2", "b. 4", "c. 8", "d. 16"], 
    answer: "c" 
  },
  { 
    id: 3, 
    question: "3. Consider a system with h(n)=0.5δ(n)+δ(n-1)+0.5δ(n-2). The magnitude and phase response are:", 
    options: ["a. 1+cos(2w) & w", "b. 1+cos(w) & -w", "c. 2+cos(2w) & 2w", "d. 1+0.5cos(w) & -2w"], 
    answer: "b" 
  },
  { 
    id: 4, 
    question: "4. For h(n)=0.5δ(n)+δ(n-1)+0.5δ(n-2), find y_ss(n) if x(n)=5cos(π/4 * n)u(n):", 
    options: ["a. 8.535cos(π/4 n - π/2)", "b. 8.535cos(π/4 n + π/2)", "c. 8.535cos(π/4 n - π/4)", "d. 8.535cos(π/4 n + π/4)"], 
    answer: "c" 
  },
  { 
    id: 5, 
    question: "5. Given sampling rate = 100 sample/sec, if x(t)=3cos(40π/2 t), the phase of frequency response at digital frequency is:", 
    options: ["a. -0.458 rad", "b. 47 degrees", "c. 0.225 rad", "d. -0.325 rad"], 
    answer: "a" 
  },
  { 
    id: 6, 
    question: "6. Given X(z) = z / (3z² - 4z + 1), at causality, x(0) equals:", 
    options: ["a. 1/3", "b. 0", "c. 4/9", "d. 26/54"], 
    answer: "b" 
  },
  { 
    id: 7, 
    question: "7. Consider y(n)=-0.1y(n-1)+0.2y(n-2)+x(n)+x(n-1). The impulse response is:", 
    options: ["a. h(n)=-0.55(-1/2)^{n-1} + 1.55(0.4)^n", "b. h(n)=-0.55(-1/2)^{n-1} + (0.4)^n u(n)", "c. h(n)=-0.55(-1/2)^{n} u(n) + 1.55(0.4)^n u(n)", "d. None of the above"], 
    answer: "c" 
  },

  // Page 2
  { 
    id: 8, 
    question: "8. The Z transform of x(n)=(2+j3)^n u(n) is:", 
    options: ["a. z / (z + (2+j3)), |z|>3", "b. z / (z - (2-j3)), |z|>2", "c. z / (z + (2-j3)), |z|>5", "d. z / (z - (2+j3)), |z|>3.6"], 
    answer: "d" 
  },
  { 
    id: 9, 
    question: "9. Consider y(n)-3y(n-1)=x(n), y(-1)=1, x(n)=4u(n). The output is:", 
    options: ["a. y(n)=u(-n-1)+3^n u(n)", "b. y(n)=-2u(n)+9(3^n)u(n)", "c. y(n)=u(-n-1)+3^n u(-n-1)", "d. y(n)=-2u(n)+9(3^n)u(-n-1)"], 
    answer: "b" 
  },
  { 
    id: 10, 
    question: "10. Given x(n)={2,1,1,2}, using DFT, the value of X(2) is:", 
    options: ["a. 1-j", "b. 6", "c. 1+j", "d. 0"], 
    answer: "d" 
  },
  { 
    id: 11, 
    question: "11. Given x(n)={-1,2,1}, the output of the first stage of FFT is:", 
    options: ["a. [2, -2-j2, -2, -2+j2]", "b. [1, 0, 6, 0]", "c. [0, -2, 2, 2]", "d. [1, 3, 0, 0]"], 
    answer: "c" 
  },
  { 
    id: 12, 
    question: "12. Design LPF using Bilinear transformation (k1=-3db). The order and cut off frequency are:", 
    options: ["a. 2 & 2", "b. 3 & 3", "c. 4 & 4", "d. 5 & 3.2"], 
    answer: "a" 
  },
  { 
    id: 13, 
    question: "13. A time invariant system is a system whose output:", 
    options: ["a. increases with delay", "b. decreases with delay", "c. remains same with delay", "d. vanishes with delay"], 
    answer: "c" 
  },
  { 
    id: 14, 
    question: "14. How do we define the stability of a system?", 
    options: ["a. Bounded input gives bounded output for SOME values", "b. Unstable if bounded input gives bounded output for ALL", "c. Stable if bounded input gives bounded output for ALL", "d. Unstable if bounded input gives bounded output for SOME"], 
    answer: "c" 
  },
  { 
    id: 15, 
    question: "15. A system has y[n]=x[-n]. This system is:", 
    options: ["a. Time invariant", "b. Non causal", "c. Memoryless", "d. Causal"], 
    answer: "b" 
  },
  { 
    id: 16, 
    question: "16. Determine the number of complex additions required for 32 direct computations of DFT:", 
    options: ["a. 240", "b. 56", "c. 854", "d. 992"], 
    answer: "d" 
  },
  { 
    id: 17, 
    question: "17. Which of the following is/are features of the digital signal processor?", 
    options: ["a. Real-time processing", "b. Fast array processing", "c. Cannot store results", "d. Both (a) and (b)"], 
    answer: "d" 
  },

  // Page 3
  { 
    id: 18, 
    question: "18. The signal x(n)=2(u(n+2)-u(n-3)) has how many samples?", 
    options: ["a. 3", "b. 4", "c. 5", "d. 6"], 
    answer: "c" 
  },
  { 
    id: 19, 
    question: "19. The period of the signal x(n)=e^(i * π/2 * n) equals:", 
    options: ["a. 8", "b. 4", "c. 2", "d. 1"], 
    answer: "b" 
  },
  { 
    id: 20, 
    question: "20. The signal x(n)={1, 2, 3, -1}. What is the output of x(n) * δ(n-2)?", 
    options: ["a. δ(n)", "b. 2δ(n-1)", "c. 3δ(n-2)", "d. -δ(n-3)"], 
    answer: "c" 
  },
  { 
    id: 21, 
    question: "21. Which of the following represents the bandwidth of the filter?", 
    options: ["a. ωp + ωs", "b. -ωp + ωs", "c. ωp - ωs", "d. None of the mentioned"], 
    answer: "b" 
  },
  { 
    id: 22, 
    question: "22. System relationship y(n)=(n+1)x(n) is:", 
    options: ["a. Causal and stable", "b. Noncausal and stable", "c. Causal and unstable", "d. Noncausal and unstable"], 
    answer: "c" 
  },
  { 
    id: 23, 
    question: "23. In 8 point DFT we need number of complex additions =", 
    options: ["a. 56", "b. 8", "c. 64", "d. None of the above"], 
    answer: "a" 
  },
  { 
    id: 24, 
    question: "24. For x(n)={2,4,6,2}, we can represent the sequence x(2n) as:", 
    options: ["a. {4,8,12,4}", "b. {-4,-8,-12}", "c. {1,2,3,1}", "d. {2,6}"], 
    answer: "d" 
  },
  { 
    id: 25, 
    question: "25. The energy of x(n) in the shown graph is:", 
    options: ["a. 3 Joule", "b. 10 Joule", "c. 12 Joule", "d. 6 Joule"], 
    answer: "b" 
  },
  { 
    id: 26, 
    question: "26. If LTI system has input x(n)=δ(n), the output y(n) is:", 
    options: ["a. y(n)=h(n)", "b. y(n)=h(n-1)", "c. y(n)=x(n)", "d. y(n)=s(n)"], 
    answer: "a" 
  },
  { 
    id: 27, 
    question: "27. The Z transform of x(n)=0.5^n u(n) + (1/3)^n u(n) is:", 
    options: ["a. z/(z-0.5) + z/(z+1)", "b. z/(z-0.5) + z/(z-1)", "c. z/(z-0.5) + z/(z-1/3)", "d. z/(z-1) + z/(z-1)"], 
    answer: "c" 
  },

  // Page 4
  { 
    id: 28, 
    question: "28. Given x(n)={1,2,-1} and h(n)={1,-1,-1,1}, if y(n)=x(n)⊗h(n), the value of y(2) is:", 
    options: ["a. -4", "b. 0", "c. 4", "d. 6"], 
    answer: "a" 
  },
  { 
    id: 29, 
    question: "29. What is the fundamental frequency of discrete-time sin(π/3 * n)?", 
    options: ["a. π/3", "b. π/6", "c. 2π/8", "d. π"], 
    answer: "a" 
  },
  { 
    id: 30, 
    question: "30. Is the signal x(n)=cos(πn/9)+sin(πn/9+0.5) periodic?", 
    options: ["a. 32", "b. 126", "c. 252", "d. None periodic"], 
    answer: "b" 
  },
  { 
    id: 31, 
    question: "31. A system with h(n)=2⁻ⁿ u(n) is:", 
    options: ["a. Stable", "b. Non causal", "c. FIR", "d. Unstable"], 
    answer: "a" 
  }
];

const MCQ_DATA2 = [
  // Q.1. Choose the correct answer
  { 
    id: 1, 
    question: "1) For x[n]=[2,-1,-1,2,3], we can represent the sequence of numbers of -x[4-2n] as:", 
    options: ["A) [2,0,-2,0,2]", "B) [0,-2,1]", "C) [0,2,-2,2]", "D) [2,0,-2,0,2,0]"], 
    answer: "B" 
  },
  { 
    id: 2, 
    question: "2) What is δ[2n]?", 
    options: ["A) 1", "B) 0.5δ[n]", "C) δ[n]", "D) none of the above"], 
    answer: "C" 
  },
  { 
    id: 3, 
    question: "3) What is true about the input-output system relationship y[n]=x²[n]?", 
    options: ["A) linear and stable", "B) Causal and unstable", "C) noncausal and unstable", "D) nonlinear and stable"], 
    answer: "D" 
  },
  { 
    id: 4, 
    question: "4) u(n)-u(n-2) is equal to:", 
    options: ["A) δ(n)+δ(n-1)", "B) δ(n)-δ(n-1)", "C) δ(n)+δ(n-1)+δ(n-2)", "D) δ(n)"], 
    answer: "A" 
  },
  { 
    id: 5, 
    question: "5) x[n]=cos(n/2)cos(πn/4) is:", 
    options: ["A) periodic, period=4", "B) periodic, period=8", "C) periodic, period=16", "D) nonperiodic"], 
    answer: "D" 
  },
  { 
    id: 6, 
    question: "6) The system has an input X=[2, 1] and impulse response h=[1, 2, 1]. Find the output y[n]:", 
    options: ["A) [2,5,4,1]", "B) [1,2,5,2,1]", "C) [1,4,4,1]", "D) [2,5,5,2]"], 
    answer: "A" 
  },

  // Q.2. System Analysis & Frequency Response
  { 
    id: 7, 
    question: "7) Find H(e^jω) for y[n]=0.8y[n-1]+x[n]:", 
    options: ["A) 1/(1-0.5e^jω)", "B) 1/(1+0.8e^jω)", "C) 1/(1-0.8e^jω)", "D) 1/(1+0.5e^jω)"], 
    answer: "C" 
  },
  { 
    id: 8, 
    question: "8) Find the y_ss[n] for the input x[n]=cos(0.05πn)u[n]:", 
    options: ["A) 5.43 cos(0.02πt-0.458)", "B) 4.093 cos(0.05πn-0.5377)", "C) 5.98 cos(0.2πt-0.6)", "D) 2.53 cos(20πt-0.8)"], 
    answer: "B" 
  },
  { 
    id: 9, 
    question: "9) A causal discrete-time LTI system is described by y[n]-0.5y[n-1]=x[n]+0.5x[n-1]. Find h[n]:", 
    options: ["A) (1/2)^n u[n] - 0.5(1/2)^n-2 u[n-2]", "B) (1/2)^n u[n] - (1/2)^n-1 u[n-1]", "C) (1/2)^n u[n] + 0.5(1/2)^n-1 u[n-1]", "D) (1/2)^n u[n] - 0.5(1/2)^n-1 u[n-1]"], 
    answer: "D" 
  },
  { 
    id: 10, 
    question: "10) Consider x[n]={1,2,2} and h[n]={0,1,2,3}. Calculate circular convolution y[n]:", 
    options: ["A) [1,5,4,9]", "B) [1,7,4,8]", "C) [10,7,4,9]", "D) [10,3,4,5]"], 
    answer: "C" 
  },
  { 
    id: 11, 
    question: "11) Compute X[K] using DFT of x[n]=[1,0,-1,0]:", 
    options: ["A) [0,2,0,2]", "B) [5,2+j,1,2-j]", "C) [6,-2,-2,2]", "D) [5,3+j,1,3-j]"], 
    answer: "A" 
  },
  { 
    id: 12, 
    question: "12) Compute FFT of x[n]=[1,2,3,4]:", 
    options: ["A) [3,3-4j,5,3+4j]", "B) [10,-2+2j,-2,-2-2j]", "C) [10,-2+2j,2,-2-2j]", "D) [3,3+4j,5,3-4j]"], 
    answer: "B" 
  },

  // Q.3. Z-Transform Analysis
  { 
    id: 13, 
    question: "13) The type of the equation y[n]-5/6y[n-1]+1/6y[n-2]=x[n] is:", 
    options: ["A) recursive", "B) non-recursive", "C) a or b", "D) none of above"], 
    answer: "A" 
  },
  { 
    id: 14, 
    question: "14) Find the system function H(z) for the system in Q.13:", 
    options: ["A) z² / ((z-1/2)(z-1/3)), |z|>1/2", "B) (z²-z)/(z²+0.1z-0.2), |z|<1/3", "C) z² / ((z-1/2)(z-1/3)), |z|<1/3", "D) z / (z²-0.1z+0.2), |z|>1/2"], 
    answer: "A" 
  },
  { 
    id: 15, 
    question: "15) Find the impulse response h[n] for the causal system in Q.13:", 
    options: ["A) -0.55(-1/2)^n u[n] + 1.55(0.4)^n u[n]", "B) 3(1/2)^n u[n] - 2(1/3)^n u[n]", "C) 3(1/2)^n u[-n-1] - 2(1/3)^n u[-n-1]", "D) (1/3)^n u[n] + (-1/4)^n u[-n]"], 
    answer: "B" 
  },
  { 
    id: 16, 
    question: "16) Is the system in Q.13 causal?", 
    options: ["A) Non-causal", "B) causal", "C) a and b", "D) none of above"], 
    answer: "B" 
  },
  { 
    id: 17, 
    question: "17) Is the system in Q.13 stable?", 
    options: ["A) stable", "B) non-stable", "C) a and b", "D) none of above"], 
    answer: "A" 
  },
  { 
    id: 18, 
    question: "18) The type of h[n] for the system in Q.13 is:", 
    options: ["A) FIR", "B) IIR", "C) a and b", "D) none of above"], 
    answer: "B" 
  },

  // Q.4. Filter Design
  { 
    id: 19, 
    question: "19) An analog high-pass filter has the following specifications: a passband attenuation of 2 dB for all signal greater than 200 rad/sec; the stopband attenuation of 20 dB for all signal less than 100 rad/sec; and no ripple within both stopband and passband, Calculate the filter order:", 
    options: ["A) 2", "B) 3", "C) 2.3", "D) 4"], 
    answer: "B" 
  },
  { 
    id: 20, 
    question: "20) An analog low-pass filter has the following specifications: a passband attenuation of 2 dB for all signal less than 20 rad/sec; the stopband attenuation of 10 dB for all signal greater than 30 rad/sec; and no ripple within both stopband and passband :Calculate the filter order:", 
    options: ["A) 1", "B) 2", "C) 3", "D) 4"], 
    answer: "D" 
  },
  { 
    id: 21, 
    question: "21) The cut of frequency Ω𝑐 Q.20:", 
    options: ["A) 12.3985", "B) 11.3489", "C) 21.3868", "D) 23.3984"], 
    answer: "C" 
  },

  // Q.5. Bilinear Transformation
  { 
    id: 22, 
    question: "22) Design a digital filter H(z), using the Bilinear transformation method, to use in A/D-H[z]-D/A structure to satisfy the following specification [use sampling rate of 1000sample/second] maximally flat LPF response with -2 dB cutoff at 5 rad/sec; at least 23dB attenuation at all radian frequencies greater than 10 rad/sec. Find the following:Convert analog specification to digital specification:", 
    options: ["A) 0.5 & 0.1 rad", "B) 5x10⁻³ & 10x10⁻³ rad", "C) 5x10³ rad & 10x10³ rad", "D) 5 & 10 rad"], 
    answer: "B" 
  },
  { 
    id: 23, 
    question: "23) The order of the analog filter for the specifications in Q.22 is:", 
    options: ["A) 3", "B) 4", "C) 5", "D) 2"], 
    answer: "C" 
  },
  { 
    id: 24, 
    question: "24) The cutoff frequency for the filter in Q.22 is:", 
    options: ["A) 4.578", "B) 3.598", "C) 2.158", "D) 5.275"], 
    answer: "D" 
  },
  { 
    id: 25, 
    question: "25) The normalized analog H(s) for the 4th order filter in Q.22 is:", 
    options: ["A) 1/(s+1)", "B) 1/(s⁴+2.613s³+3.414s²+2.613s+1)", "C) 1/(s³+2s²+2s+1)", "D) 1/(s⁵+3.236s⁴+5.236s³+5.236s²+3.236s+1)"], 
    answer: "D" 
  },
  { 
    id: 26, 
    question: "26) The Bilinear transformation equation is:", 
    options: ["A) S -> 2/T * (1-z⁻¹)/(1+z⁻¹)", "B) S -> 1/T * (1-z⁻¹)/(1-z⁻¹)", "C) S -> 2/T * (1+z⁻¹)/(1+z⁻¹)", "D) S -> 1/T * (1+z⁻¹)/(1-z⁻¹)"], 
    answer: "A" 
  }
];

const MCQ_DATA3 = [
  // Q.1. Discrete Time Signals Operations
  { 
    id: 1, 
    question: "1) Using the discrete time signals 𝑥1[𝑛]=[1,3,2] and 𝑥2[𝑛]=[8,4,2] To answer the following questions:", 
    options: ["A) [4,0,6,0,2]", "B) [4,6,2]", "C) [2,6,4]", "D) [2,0,6,0,4]"], 
    answer: "A" 
  },
  { 
    id: 2, 
    question: "2) Given x2[n]=[8,4,2], find the odd part of the signal:", 
    options: ["A) [-2,0,2]", "B) [1,2,0,-2,-1]", "C) [4,2,0,-2,-4]", "D) [-2,-1,0,1,2]"], 
    answer: "C" 
  },
  { 
    id: 3, 
    question: "3) Find the energy of signal x1[n] where x1[n]=[1,3,2]:", 
    options: ["A) 20", "B) 14", "C) 6", "D) 15"], 
    answer: "B" 
  },
  { 
    id: 4, 
    question: "4) The expression u[n-2]-u(n-4) is equal to:", 
    options: ["A) δ[n-2]+δ[n-3]+δ[n-4]", "B) δ[n]+δ[n-1]", "C) δ[n-3]+δ[n-4]", "D) δ[n-2]+δ[n-3]"], 
    answer: "D" 
  },
  { 
    id: 5, 
    question: "5) Calculate the linear convolution x1[n] * x2[n] for x1=[1,3,2] and x2=[8,4,2]:", 
    options: ["A) [4,15,16,14,3]", "B) [8,28,30,14,4]", "C) [4,15,16,14,3]", "D) [8,28,30,14,4]"], 
    answer: "B" 
  },
  { 
    id: 6, 
    question: "6) Find the value of δ[1]:", 
    options: ["A) 0", "B) 1", "C) ∞", "D) None of them"], 
    answer: "A" 
  },

  // Continuous-time LTI System Analysis
  { 
    id: 7, 
    question: "7) Consider a continuous-time LTI system described by y’(t)+ 2 y(t) = x(t) + x’(t), determine the frequency response H(ω):", 
    options: ["A) H(ω)=(1-jω)/(1+jω)", "B) H(ω)=(1+jω)/(1+jω)", "C) H(ω)=(1-jω)/(2+jω)", "D) H(ω)=(1+jω)/(2+jω)"], 
    answer: "D" 
  },
  { 
    id: 8, 
    question: "8) Find the impulse response of the previous system in Q.7:", 
    options: ["A) h(t)=δ(t)+e⁻²ᵗ", "B) h(t)=2δ(t)-e⁻²ᵗ", "C) h(t)=u(t)-e⁻²ᵗu(t)", "D) h(t)=δ(t)-e⁻²ᵗu(t)"], 
    answer: "A" 
  },
  { 
    id: 9, 
    question: "9) Based on the impulse response h(t) from Q.8, the system is:", 
    options: ["A) memoryless", "B) noncausal", "C) causal", "D) none of them"], 
    answer: "C" 
  },
  { 
    id: 10, 
    question: "10) Based on the impulse response h(t) from Q.8, the system is:", 
    options: ["A) nonlinear", "B) stable", "C) memory less", "D) none of them"], 
    answer: "B" 
  },

  // Fourier Analysis
  { 
    id: 11, 
    question: "11) Find the Fourier transform for x(t) = 1 / (a² + t²):", 
    options: ["A) X(ω)=(π/2a)e⁻ᵃʷ", "B) X(ω)=2πe⁻ᵃʷ", "C) X(ω)=2πδ(ω)+e⁻ᵃʷ", "D) X(ω)=(π/a)e⁻ᵃ|ʷ|"], 
    answer: "D" 
  },
  { 
    id: 12, 
    question: "12) For x(t)=sin²(t), find the complex exponential Fourier series representation:", 
    options: ["A) c-1=c1=-1/4 and c0=1/2", "B) c-1=c1=1/4 and c0=1/2", "C) c-1=c1=-1/4, c-2=c2=-1/4, c0=1/2", "D) c-1=c1=1/4 and c0=1/2"], 
    answer: "A" 
  },
  { 
    id: 13, 
    question: "13) The even component (ak) of the trigonometric Fourier series of a periodic rectangular pulse is:", 
    options: ["A) ak=2A/kπ", "B) ak=2A/(2m+1)π", "C) ak=0", "D) None of the above"], 
    answer: "C" 
  },
  { 
    id: 14, 
    question: "14) Σ δ(t - kT₀) from k=-∞ to ∞ Determine the complex exponential Fourier series for an impulse train δT0(t):", 
    options: ["A) co=ck=0", "B) co=ck=1/T0", "C) co=1/T0, ck=2/T0", "D) none of the above"], 
    answer: "B" 
  }
];

const QUESTIONS = [
  ...MCQ_DATA,
  ...MCQ_DATA1,
  ...MCQ_DATA2,
  ...MCQ_DATA3
];