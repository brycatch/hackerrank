# https://www.hackerrank.com/challenges/repeated-string/problem
import math
import re


def find_a(string):
    matches = re.findall(r"a", string)
    return len(matches)


def repeated_string(string, number):
    # Factor to multiply string length to get number
    factor = number // len(string)
    # Get missing letters to get total 'number' value
    module = number % len(string)

    factor_matches = find_a(string) * factor
    module_matches = find_a(string[0:module])
    return factor_matches + module_matches


if __name__ == "__main__":
    repeated_string(
        "kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm",
        736778906400,
    )

    repeated_string(
        "kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm",
        736778906400,
    )
