# https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
def jumping_on_the_clouds(c):
    jumps = 0
    cloud_counter = 0
    clouds = len(c) - 1

    while cloud_counter < clouds:
        to_sum = 2 if cloud_counter + 2 <= clouds else 1
        cloud_counter += to_sum if c[cloud_counter + to_sum] == 0 else 1
        jumps += 1

    return jumps


if __name__ == "__main__":
    print(jumping_on_the_clouds([0, 0, 1, 0, 0, 1, 0]))
