extern "C" {
    int lcm(int a, int b) {
        int max = (a > b) ? a : b;
        while (true) {
            if (max % a == 0 && max % b == 0) {
                return max;
            }
            max++;
        }
    }
}
