import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Container,
  CircularProgress,
  Box,
  TableFooter,
  TablePagination,
} from "@mui/material";
import Layout from "../Layout/Layout";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const AdminDashboard = () => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "submissions"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFormData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            textTransform: "uppercase",
            color: "goldenrod",
            fontWeight: "700",
            textShadow: "1px 1px 2px purple",
          }}
        >
          Dashboard
        </Typography>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <CircularProgress />
          </Box>
        ) : formData.length > 0 ? (
          <TableContainer component={Paper} sx={{ mb: 3, mt: 3 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>First Name</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Last Name</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Contact No</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Email</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Requirements</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Date</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {formData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((data) => (
                    <TableRow key={data.id}>
                      <TableCell>{data.firstName}</TableCell>
                      <TableCell>{data.lastName}</TableCell>
                      <TableCell>{data.contactNo}</TableCell>
                      <TableCell>{data.email}</TableCell>
                      <TableCell>{data.requirements}</TableCell>
                      <TableCell>
                        {data.submissionDate
                          ? new Date(data.submissionDate).toLocaleDateString(
                              "en-GB",
                              {
                                day: "2-digit",
                                month: "2-digit",
                                year: "2-digit",
                              }
                            )
                          : "N/A"}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    count={formData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        ) : (
          <Typography variant="body1" align="center" sx={{ mt: 3, mb: 3 }}>
            No data available.
          </Typography>
        )}
      </Container>
    </Layout>
  );
};

export default AdminDashboard;
