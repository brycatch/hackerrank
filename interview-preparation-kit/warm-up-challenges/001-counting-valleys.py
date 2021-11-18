# https://www.hackerrank.com/challenges/counting-valleys/problem


def counting_valleys(steps, path):
    sea_level = 0
    valleys = 0
    for step in path:
        # The next step is going to be a valley
        is_valley = sea_level == -1 and step == "U"
        # Adding one if is a valley
        if is_valley:
            valleys = valleys + 1
        sea_level = sea_level + 1 if step == "U" else sea_level - 1
    return valleys


if __name__ == "__main__":
    print(counting_valleys(8, "UDDDUDUU"))
